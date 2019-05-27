import Navbar from './Navbar';

export default ({ children, className }) => {
    const classname = `page ${className}`;
    return (
        <div className={classname}>
            <Navbar />
            { children }
        </div>
    );
}
