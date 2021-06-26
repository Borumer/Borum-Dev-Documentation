import SwaggerParser from "@apidevtools/swagger-parser";

/**
 * Loads the Open API specification using Swagger Parser to parse without references
 * @param {string} fileName The name of the yaml file in the data folder
 * @returns {OpenApi.Document<{}>} The yaml file parsed as an object or an empty object
 */
export async function loadApiSpecFile(fileName) {
	try {
		const parser = new SwaggerParser();
		const api = await parser.validate(`data/${fileName}.yml`);

		api.resources = [];

		Object.values(api.paths).forEach(
			(requestMethod, pathIndex) => {
				Object.values(requestMethod).forEach((item, requestMethodIndex) => {
					const resourceObj = {};

					resourceObj.funcName = item.summary
						.split(" ")
						.map((item, index) => {
							if (index == 0) return item.toLowerCase();

							return (
								item.toUpperCase().substring(0, 1) +
								item.substring(1)
							);
						})
						.join("");
					

					resourceObj.requestMethod = Object.keys(requestMethod)[
						requestMethodIndex
					];

					resourceObj.path = Object.keys(api.paths)[pathIndex];
					console.log('path', resourceObj.path)

					api.resources.push(Object.assign(resourceObj, item));
				});
			}
		);

		console.info("API Spec is valid");

		return api;
	} catch (error) {
		console.error(`The API is invalid: ${error}`);
		return {};
	}
}
