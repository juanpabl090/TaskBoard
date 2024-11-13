import { useState } from 'react';
import { signUp } from '../../services/userServices';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		userName: '',
		email: '',
		password: ''
	})


	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const { data, status } = await signUp(formData);
			if (status == 201) {
				console.log(data);
				navigate("/login", { replace: true })
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-light-gray">
			<div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
				<h2 className="text-2xl font-bold text-center mb-8">User Register</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="name" className="block text-sm font-medium mb-1">
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							required
							className="w-full px-3 py-2 border border-light-gray rounded-md shadow-sm focus:outline-none focus:ring-bright-blue focus:border-bright-blue"
							placeholder="Write your full name"
							value={formData.name}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="username" className="block text-sm font-medium mb-1">
							Username
						</label>
						<input
							id="userName"
							name="userName"
							type="text"
							required
							className="w-full px-3 py-2 border border-light-gray rounded-md shadow-sm focus:outline-none focus:ring-bright-blue focus:border-bright-blue"
							placeholder="Write your username"
							value={formData.userName}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-1">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							className="w-full px-3 py-2 border border-light-gray rounded-md shadow-sm focus:outline-none focus:ring-bright-blue focus:border-bright-blue"
							placeholder="example@email.com"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							required
							className="w-full px-3 py-2 border border-light-gray rounded-md shadow-sm focus:outline-none focus:ring-bright-blue focus:border-bright-blue"
							placeholder="Write a secure password"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>
					<div>
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bright-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bright-blue"
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterPage;
