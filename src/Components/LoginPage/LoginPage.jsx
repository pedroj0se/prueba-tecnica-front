
import React from "react";
import "./loginPage.css";
import { MdTravelExplore } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import icon from "../../Assets/icon.png";
import { AiOutlineSwapRight, AiOutlineSwapLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="loginPage flex">
            <div className="loginContainer flex">

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={icon} alt="Logo" />
                        {/* <MdTravelExplore className="icon"/> */}
                        <h3>Bienvenido!</h3>
                    </div>

                    <form action="" className="form grid">
                        <span className="showMessage">Estado de Login</span>

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
                                <span>Login Client</span>
                                <AiOutlineSwapRight className="icon" />
                            </button>
                        </Link>
                        <Link to="/admin">
                            <button className="btn flex">
                                <span>Login Admin</span>
                                <AiOutlineSwapRight className="icon" />
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn flex">
                                <span>Sing Up</span>
                                <AiOutlineSwapLeft className="icon" />
                            </button>
                        </Link>
                        <span className="forgotPassword">
                            Olvidaste tu contraseña? <a href="">Click Aqui</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
