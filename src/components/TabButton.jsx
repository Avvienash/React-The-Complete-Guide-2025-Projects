export default function TabButton({children, onClick, isActive}){
    return(
        <li><button className={isActive ? "active":null} onClick={onClick}>{children}</button></li>
    );
}