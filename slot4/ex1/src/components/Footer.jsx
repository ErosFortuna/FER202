

function Footer({ myProfile }) {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <>
                <img
                    src={myProfile.avatar}
                    alt="Avatar"
                    className="rounded-circle"
                    width="50"
                    height="50"
                />
                <h5 className="mt-2">{myProfile.name}</h5>
                <p>{myProfile.email}</p>
            </>
        </footer>
    );
}

export default Footer;