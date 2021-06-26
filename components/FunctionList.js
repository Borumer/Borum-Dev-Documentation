import Link from "next/link";
import functionList from "./functionlist.module.css";

/**
 * The list of REST API paths for a given version
 * @param {Object} props
 * @param {string} props.dirPath
 * @param {OpenApiV2.PathsObject} props.funcList
 * @param {string} props.activeFunc The name of the function that is currently being viewed
 * or "" if there is no "active" function
 */
export default function FunctionList({ dirPath, funcList, activeFunc }) {
	dirPath = dirPath ? dirPath.concat("/") : "";

	return (
		<ul className={functionList.functionList}>
			<li
				key={0}
				className={
					activeFunc && activeFunc == "Overview"
						? functionList.active
						: ""
				}
			>
				<Link href={`./${dirPath}Overview`}>
					<a>Overview</a>
				</Link>
			</li>
			{funcList.map((item, index) => {
				return (
					<li
						key={index + 1}
						className={
							activeFunc && activeFunc == item.summary
								? functionList.active
								: ""
						}
					>
						<Link
							href={`./${dirPath}[funcName]`}
							as={`./${dirPath}${item.funcName}`}
						>
							<a>{item.summary}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
