import restpath from './restapipath.module.css';

export default function RestApiPath(props) {
    return (
        <section>
            <div className={restpath.request}></div>
            <p className={restpath.requestUrl}>
                <span className={restpath.requestMethod}>{props.requestMethod}</span>
                <code>https://api.jot.bforborum.com/api/{props.version}/{props.path}</code>
            </p>
            <h2>Required Request Headers</h2>
            <h2>Request Body</h2>
            <div>
                <h2>Response Body</h2>
                <p></p>
                <h2>Response Headers</h2>
            </div>
        </section>
    );
}