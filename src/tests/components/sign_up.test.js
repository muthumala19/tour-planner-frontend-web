import {render} from "@testing-library/react";
import SignUp from "../../components/signup_component";

test('testing sign up', () => {
    render(<SignUp/>);
    const element = document.getAllByTestId('sign_up_test-1');
    expect(element).toBeInTheDocument();
});