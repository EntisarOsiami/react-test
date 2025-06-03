import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import Swal from 'sweetalert2';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const schema = z
    .object({
      username: z.string(),
      email: z.email(),
      password: z.string(),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  async function onSubmit() {
    const userData = {
      username: register.username,
      email: register.email,
      password: register.password,
    };
    const res = await axios.post('https://fakestoreapi.com/users', userData);
    console.log(res.data);
    if (res) {
      Swal.fire({
        title: 'registration is successful',
        text: 'now please login',
        icon: 'success',
      }).then(navigate('/login'));
    } else {
      Swal.fire({
        title: 'registration has failed',
        text: 'please try again',
        icon: 'warning',
      });
    }
  }

  return (
    <div className='flex flex-col justify-center item-center gap-2'>
      <div className=' w-full'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-center items-center gap-2'>
          <h3 className='font-bold space-y-3'>Register</h3>
          <label>Username</label>
          <input className='' type='text' {...register('username')} />
          {errors.username && (
            <div className='text-red-600'>username is required</div>
          )}
          <label>email</label>

          <input className='' type='text' {...register('email')} />
          {errors.username && (
            <div className='text-red-600'>email must be in a valid format</div>
          )}
          <label>password</label>

          <input className='' type='password' {...register('password')} />
          {errors.username && (
            <div className='text-red-600'>
              password must be at least 8 character
            </div>
          )}
          <label>confirm password</label>

          <input
            className=''
            type='password'
            {...register('confirmPassword')}
          />
          {errors.username && <div className='text-red-600'></div>}
          <button
            disabled={isSubmitting}
            className='py-2 px-3 text-white rounded-xl bg-emerald-800'>
            {isSubmitting ? 'Loading' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
