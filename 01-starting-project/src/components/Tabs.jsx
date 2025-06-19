export default function Examples({children,buttons,ButtonsContainer}) {

    return(
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}