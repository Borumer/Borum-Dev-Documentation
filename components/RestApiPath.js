import restpath from './restapipath.module.css';

export default function RestApiPath(props) {
    return (
        <article className={restpath.restpath}>
            
            <section className={restpath.request}>
                <h1>Request</h1>
                <p className={restpath.requestUrl}>
                    <span className={restpath.requestMethod}>{props.requestMethod}</span>
                    <code>https://api.jot.bforborum.com/api/{props.version}/{props.path}</code>
                </p>
                <h2>Required HTTP Request Headers</h2>
                <table className={restpath.requiredHeaders}>
                    <thead>
                        <th>Header</th>
                        <th>Format</th>
                    </thead>
                    {props.requiredHeaders.map((item, index) => (
                        <tr key={index}>
                            <td className={restpath.headerName}>{item.name}</td>
                            <td className={restpath.headerUsage}>{item.usage}</td>
                        </tr>
                    ))}
                </table>
                <h2>Request Query Parameters</h2>
                <h2>Request Body</h2>
            </section>
            <section className={restpath.response}>
                <h1>Response</h1>
                <div>
                    <h2>Response Body</h2>
                    <p></p>
                    <h2>Response Headers</h2>
                </div>
            </section>
            
        </article>
    );
}