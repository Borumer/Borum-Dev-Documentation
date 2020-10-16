import restpath from './restapipath.module.css';

export default function RestApiPath({version, path, request, response, description}) {
    return (
        <article className={restpath.restpath}>
            <p className={restpath.description}>{description ?? ""}</p>
            <RequestInfo {...{version, path}} {...request} />
            <ResponseInfo {...{version, path}} {...response} />
        </article>
    );
}

function RequestInfo(props) {
    return (
        <section className={restpath.request}>
            <h1>Request</h1>
            <p className={restpath.requestUrl}>
                <span className={restpath.requestMethod}>{props.method}</span>
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
                <PrettyPrintedJSONObject json={props.data} />
            </div>
        </section>
    );
}

function PrettyPrintedJSONObject({json = {}}) {
    const syntaxHighlight = json => {
        if (typeof json != 'string') {
            json = JSON.stringify(json, null, 4);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            //return '<span class="' + cls + '">' + match + '</span>';
            return <span className={cls}>{match}</span>
        });
    }

    return <pre>{JSON.stringify(json, null, 4)}</pre>
}