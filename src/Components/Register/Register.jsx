
import React from "react";
import "./register.css";
import { MdMarkEmailRead, MdTravelExplore } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import icon from "../../Assets/icon.png";
import { AiOutlineSwapRight, AiOutlineSwapLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="registerPage flex">
            <div className="registerContainer flex">

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={icon} alt="Logo" />
                        {/* <MdTravelExplore className="icon"/> */}
                        <h3>Descubre todo lo que ofrecemos!</h3>
                    </div>

                    <form action="" className="form grid">

                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className="icon" />
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">Usuario</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" name="username" id="username" placeholder="Usuario" />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Contraseña</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" name="password" id="password" placeholder="Contraseña" />
                            </div>
                        </div>
                        <Link to="/home">
                            <button className="btn flex">
                                <span>Register</span>
                                <AiOutlineSwapRight className="icon" />
                            </button>
                        </Link>
                        {/* <Link to="/register">
                            <button className=" btn flex">
                                <span>Sing Up</span>
                                <AiOutlineSwapLeft className="icon" />
                            </button>
                        </Link> */}

                        <span className="forgotPassword">
                            Ya tines una cuenta? <a href=""><Link to="/">Click Aqui</Link>
                            </a>
                        </span>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
