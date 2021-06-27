import restpath from './restapipath.module.css';

export default function RestApiPath(resource) {
    return (
        <article className={restpath.restpath}>
            <p className={restpath.description}>{resource.description ?? ""}</p>
            <RequestInfo {...resource} />
            <ResponseInfo {...resource} />
        </article>
    );
}

function RequestInfo(props) {
    return (
        <section className={restpath.request}>
            <h1>Request</h1>
            <p className={restpath.requestUrl}>
                <span className={restpath.requestMethod}>{props.requestMethod.toUpperCase()}</span>
                <code>https://api.jot.borumtech.com/api/{props.version}{props.path}</code>
            </p>
            <h2>Required HTTP Request Headers</h2>
            <table className={restpath.requiredHeaders}>
                <thead>
                    <tr>
                        <th>Header</th>
                        <th>Format</th>
                    </tr>
                </thead>
                <tbody>
                    {props.security ? Object.keys(props.security).map((item, index) => (
                        <tr key={index}>
                            <td className={restpath.headerName}>{item}</td>
                            <td className={restpath.headerUsage}>{item.usage}</td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
            <h2>Query String</h2>
            <PrettyPrintedJSONObject json={props.queryString} />
            <h2>Request Body</h2>
            <PrettyPrintedJSONObject json={props.body} />
        </section>
    );
}

function ResponseInfo(props) {
    return (
        <section className={restpath.response}>
            <h1>Response</h1>
            <div>
                <h2>Response Body</h2>
                <PrettyPrintedJSONObject json={props.response} />
            </div>
        </section>
    );
}

function PrettyPrintedJSONObject({json = {}}) {
    return <pre>{JSON.stringify(json, null, 4)}</pre>
}