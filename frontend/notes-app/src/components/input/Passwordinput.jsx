import React, {useState} from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Passwordinput = ({value, onChange, placeholder}) => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded-md mb-3 focus-within:border-blue-500 transition-colors'>
        <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder || 'Password'}
            value={value}
            onChange={onChange}
            required
            className='w-full text-sm py-3 mr-3 outline-none bg-transparent'
        />
        <button
            type="button"
            onClick={toggleShowPassword}
            className='text-gray-600 focus:outline-none cursor-pointer'
        >
            {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
        </button>
    </div>
  )
}

export default Passwordinput