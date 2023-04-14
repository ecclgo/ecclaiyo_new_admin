import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";
import truck_2 from "../components/img/truck_2.png"
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import PageTitle from "../components/PageTitle";
import TextDeco from "../components/auth/TextDeco";
import SignupBox from "../components/auth/SignUpBox";
import routes from "./Routes";
import FormError from "../components/auth/FormError";
import { login } from "../api/Login";
import { useRef } from "react";
import Authentication from "../Authentication";

function Login() {

	const userRef = useRef({});

	const { register, handleSubmit, getValues, clearErrors, formState } = useForm({
		mode: "onChange"
	});

	const onSubmit = async(data) => {
		const { adminId } = getValues();
		localStorage.setItem("adminId", adminId);
		let result = await login(data);
		if(result) {
			userRef.current.logUserIn(result);
			window.location.reload();
		}
	}

	const clearLoginError = () => {
		clearErrors("result");
	};

	return (
		<>
			<AuthLayout>
				<PageTitle title="Login" />
					<FormBox>
						<TextDeco>
							관리자 로그인
						</TextDeco>
						<div>
							<img src={truck_2} />
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Input {...register("adminId", {required: "Id를 입력해주세요."})} name="adminId" type="text" placeholder="Id를 입력해주세요." hasError={Boolean(formState.errors?.Id?.message)} onChange={clearLoginError}/>
							<FormError message={formState?.errors?.adminId?.message} />
							<Input {...register("password", {required: "password is required."})} name="password" type="password" placeholder="Password를 입력해주세요." hasError={Boolean(formState.errors?.Password?.message)} onChange={clearLoginError} />
							<FormError message={formState?.errors?.password?.message} />
							<Button type="submit" value="확인"></Button>
						</form>
						<SignupBox linkText="계정등록" link={routes.Signup} />
					</FormBox>
			</AuthLayout>
			<Authentication ref={userRef}/>
		</>
	)
};

export default Login;