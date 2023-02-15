import React, { useState } from "react";
import Navbar from "../Main/Header/Navbar.jsx";
import Footer from "../Main/Footer/Footer.jsx";
import styles from "./EnterPage.module.scss";
import { CiUser, CiMail } from "react-icons/ci";
import { AiOutlineUnlock } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";

function EnterPage() {
  const [regBtn, setRegByn] = useState(true);
  const [enterBtn, setEnterByn] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [regPasswordInput1, setRegPasswordInput1] = useState("");
  const [regPasswordInput2, setRegPasswordInput2] = useState("");
  const [enterPasswordInput, setEnterPasswordInput] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordsMatchesError, setPasswordsMatchesError] = useState("");
  const [registrationIsSuccessed, setRegistrationIsSuccessed] = useState(true);

  const emailErrorFn = (e) => {
    setEmailInput(e.target.value);
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(e.target.value)) {
      setEmailError("Некорректный e-mail");
    } else {
      setEmailError("");
    }
  };

  const usernameErrorFn = (e) => {
    setUsernameInput(e.target.value);
    const usernameRe = /[A-Z]/;
    if (!usernameRe.test(e.target.value)) {
      setUsernameError("Логин должен включать хотя бы одну заглавную букву");
    } else {
      setUsernameError("");
    }
  };

  const passwordErrorFn = (e) => {
    setRegPasswordInput1(e.target.value);
    const passwordRe = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRe.test(e.target.value)) {
      setPasswordError(
        "Пароль должен иметь как минимум 6 символов, одну заглавную букву, цифру и спецсимвол"
      );
    } else {
      setPasswordError("");
    }
  };

  const matchPasswordErrorFn = (e) => {
    setRegPasswordInput2(e.target.value);
    if (e.target.value != regPasswordInput1) {
      setPasswordsMatchesError("Пароли не совпадают!");
    } else {
      setPasswordsMatchesError("");
    }
  };

  const registrButton = () => {
    setRegByn(true);
    setEnterByn(false);
    setRegPasswordInput1("");
    setRegPasswordInput2("");
    setEnterPasswordInput("");
  };
  const enterButton = () => {
    setRegByn(false);
    setEnterByn(true);
    setRegPasswordInput1("");
    setRegPasswordInput2("");
    setEnterPasswordInput("");
  };

  const showPassBtn = () => {
    setShowPass(!showPass);
  };

  const mainRegistrationButton = () => {
    if (
      !emailError &&
      !usernameError &&
      !passwordError &&
      !passwordsMatchesError
    ) {
      setRegistrationIsSuccessed(!registrationIsSuccessed);
    }
  };

  const mainEnterButton = () => {};

  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        {registrationIsSuccessed ? (
          <div className={styles.mainBlock}>
            <div className={styles.pageIcon}>
              <CiUser />
            </div>

            <div className={styles.formBlock}>
              <div className={styles.registrButton}>
                <button
                  className={styles.registrBtn}
                  style={
                    regBtn
                      ? { backgroundColor: "#d9d9d96e" }
                      : {
                          backgroundColor: "rgba(255, 255, 255, 0)",
                          color: "#d9d9d96e",
                        }
                  }
                  onClick={registrButton}
                >
                  Регистрация
                </button>
                <button
                  className={styles.enterBtn}
                  style={
                    enterBtn
                      ? { backgroundColor: "#d9d9d96e" }
                      : {
                          backgroundColor: "rgba(255, 255, 255, 0)",
                          color: "#d9d9d96e",
                        }
                  }
                  onClick={enterButton}
                >
                  Вход
                </button>
              </div>
              {regBtn ? (
                <div className={styles.inputsBlock}>
                  <div className={styles.errorTextBlock}>
                    <h1 className={styles.inputErrorText}>{emailError}</h1>
                  </div>
                  <div className={styles.input}>
                    <CiMail className={styles.inputIcon} />
                    <input
                      name="email"
                      type="text"
                      placeholder="Почта"
                      value={emailInput}
                      onChange={(e) => emailErrorFn(e)}
                    />
                  </div>
                  <div className={styles.errorTextBlock}>
                    <h1 className={styles.inputErrorText}>{usernameError}</h1>
                  </div>
                  <div className={styles.input}>
                    <CiUser className={styles.inputIcon} />
                    <input
                      name="username"
                      type="text"
                      placeholder="Ник"
                      value={usernameInput}
                      onChange={(e) => usernameErrorFn(e)}
                    />
                  </div>
                  <div className={styles.errorTextBlock}>
                    <h1 className={styles.inputErrorText}>{passwordError}</h1>
                  </div>

                  <div className={styles.input}>
                    <AiOutlineUnlock className={styles.inputIcon} />
                    <input
                      name="input"
                      type={!showPass ? "password" : "text"}
                      placeholder="Пароль"
                      value={regPasswordInput1}
                      onChange={(e) => passwordErrorFn(e)}
                    />
                    {!showPass ? (
                      <FiEye
                        className={styles.passEye}
                        style={
                          !regPasswordInput1
                            ? { display: "none" }
                            : {
                                display: "block",
                              }
                        }
                        onClick={showPassBtn}
                      />
                    ) : (
                      <FiEyeOff
                        className={styles.passEye}
                        onClick={showPassBtn}
                        style={
                          !regPasswordInput1
                            ? { display: "none" }
                            : {
                                display: "block",
                              }
                        }
                      />
                    )}
                  </div>
                  <div className={styles.errorTextBlock}>
                    <h1 className={styles.inputErrorText}>
                      {passwordsMatchesError}
                    </h1>
                  </div>
                  <div className={styles.input}>
                    <AiOutlineUnlock className={styles.inputIcon} />
                    <input
                      name="input"
                      type={
                        !showPass && regPasswordInput2 ? "password" : "text"
                      }
                      placeholder="Повторите пароль"
                      value={regPasswordInput2}
                      onChange={(e) => matchPasswordErrorFn(e)}
                    />
                    {!showPass ? (
                      <FiEye
                        className={styles.passEye}
                        style={
                          !regPasswordInput2
                            ? { display: "none" }
                            : {
                                display: "block",
                              }
                        }
                        onClick={showPassBtn}
                      />
                    ) : (
                      <FiEyeOff
                        className={styles.passEye}
                        onClick={showPassBtn}
                        style={
                          !regPasswordInput2
                            ? { display: "none" }
                            : {
                                display: "block",
                              }
                        }
                      />
                    )}
                  </div>
                  <div className={styles.personalInfoText}>
                    {emailInput &&
                      usernameInput &&
                      regPasswordInput1 &&
                      regPasswordInput2 &&
                      !passwordsMatchesError &&
                       (
                        <p>
                          Нажимая на кнопку "ЗАРЕГИСТРИРОВАТЬСЯ" вы даёте
                          согласие на обработку персональных данных
                        </p>
                      )}
                  </div>
                  <button
                    className={styles.inputBtn}
                    onClick={mainRegistrationButton}
                  >
                    ЗАРЕГЕСТРИРОВАТЬСЯ
                  </button>
                </div>
              ) : (
                <div className={styles.inputsBlock}>
                <div className={styles.errorTextBlock}>
                    <h1 className={styles.inputErrorText}>
                      {passwordsMatchesError}
                    </h1>
                  </div>
                  <div className={styles.input}>
                    <CiUser className={styles.inputIcon} />
                    <input
                      name="username"
                      type="text"
                      placeholder="Ник"
                      value={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                    />
                  </div>
                  <div className={styles.input}>
                    <AiOutlineUnlock className={styles.inputIcon} />
                    <input
                      name="input"
                      type={!showPass ? "password" : "text"}
                      placeholder="Пароль"
                      value={enterPasswordInput}
                      onChange={(e) => setEnterPasswordInput(e.target.value)}
                    />
                    {!showPass ? (
                      <FiEye
                        className={styles.passEye}
                        style={
                          !enterPasswordInput
                            ? { display: "none" }
                            : {
                                display: "block",
                              }
                        }
                        onClick={showPassBtn}
                      />
                    ) : (
                      <FiEyeOff
                        className={styles.passEye}
                        onClick={showPassBtn}
                        style={
                          !enterPasswordInput
                            ? { display: "none" }
                            : {
                                display: "block",
                              }
                        }
                      />
                    )}
                  </div>
                  <div className={styles.rememberMeInput}>
                    <input type="checkbox" />
                    Запомнить меня
                  </div>
                  <button className={styles.inputBtn} onClick={mainEnterButton}>
                    ВХОД
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.successRegistr}>
            <BsCheckCircleFill className={styles.successRegistrIcon} />
            <p>
              Поздравляем!
              <br />
              Вы успешно зарегистрировались!
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default EnterPage;
