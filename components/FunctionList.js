import RestApiPath from './RestApiPath';
import functionList from './functionlist.module.css';

/**
 * The list of RestApiPath's for a given version
 * @param { funcList } props 
 */
export default function FunctionList(props) {
    return (
        <ul>
            {props.funcList.map(item => (
                <li><Link href={`./v1/[path].js`} as={`./v1/${item.funcName}`}><a>{item.name}</a></Link></li>
            ))}
        </ul>
    );
}