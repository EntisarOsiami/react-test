import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import Swal from 'sweetalert2';
import axios from 'axios';
import{Link} from 'react-router'

function Login() {
  const navigate = useNavigate();
  const schema = z.object({
    username: z.string(),
    password: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    const userData = {
      username: data.username,
      password: data.password,
    };
    const res = await axios.post(
      'https://fakestoreapi.com//auth/login',
      userData
    );

    const token = res.data;
    if (token) {
      const user = {
        username: data.username,
        id:1 // hardcoding id for now since i found no way to bind it to the user logged in , please message how to.
      };
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));
      Swal.fire({
        title: 'login is successful',
        text: 'Happy shopping',
        icon: 'success',
      }).then(navigate('/'), window.location.reload());
      
    } else {
      Swal.fire({
        title: 'registration has failed',
        text: 'please try again',
        icon: 'warning',
      });
    }
  };

  return (
    <div className='flex flex-col justify-center item-center'>
      <div className='shadow-lg rounded-lg'>
        <form onSubmit={handleSubmit(onSubmit)} className='border-b border-gray-900/10 pb-12 flex flex-col gap-2 max-w-4xl justify-center items-center'>
        <h3>Login</h3>
          <input
            className='block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
            type='text'
            {...register('username')}
          />
          {errors.username && (
            <div className='text-red-600'>username is required</div>
          )}

          <input
            className='block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
            type='password'
            {...register('password')}
          />
          {errors.username && (
            <div className='text-red-600'>
              password must be at least 8 character
            </div>
          )}

          <button
            disabled={isSubmitting}
            className='py-2 px-3 text-white rounded-xl bg-emerald-800'>
            {isSubmitting ? 'Loading' : 'Submit'}
          </button>
        </form>
        <p>If you don't have an account, <span className='text-blue-700'><Link to='/register'>Sign Up</Link></span></p>
      </div>
    </div>
  );
}

export default Login;
