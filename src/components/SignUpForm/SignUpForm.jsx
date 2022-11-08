import { Header } from "../Header";
import { HeaderNav } from "../HeaderNav";


export const SignUpForm = () => {
    return  <>
    <HeaderNav />
     <Header />
    <form>
        <h4> Sign In </h4>
        <div> 
            <label>Email</label>
            <input type ="text" name="email" />
        </div>
    </form>
    </>
}