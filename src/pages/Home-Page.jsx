    import { Link } from "react-router-dom";
    import CreateBtn from "../components/Create-Btn.jsx";
    import PostList from "../components/Post-List.jsx";
    import getToken from "../services/token/get-token.js";


    function HomePage() {
        const token = getToken();
        const method = 'Post';

        return(
            <section className="all-posts">
                <h1 className="hidden">Dressed In Black</h1>
                <h2 className="hidden">Tributo a Depeche Mode</h2>
                {token && <Link to="/dibposts"><CreateBtn method={method} /></Link>}
                <PostList />
            </section>
        )
    }

    export default HomePage;