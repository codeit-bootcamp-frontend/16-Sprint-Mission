export function ErrorCheck(code, data = "") {
  const messageStyle = {
    color: "red",
    fontSize: "20px",
    marginTop: "1px",
    display: "block",
  }

  const inputBorder = "2px solid red"

  if (code == "email") {
    if (data.length <= 0) {
      return {
        error: true,
        message: "이메일을 입력해주세요",
        messageStyle,
        inputBorder,
      }
    } else {
      const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
      const check = regex.test(data)
      return check
        ? {
            error: false,
            message: "",
            messageStyle: {
              color: "",
              funtSize: "",
              marginTop: "",
            },
            inputBorder: "",
          }
        : {
            error: true,
            message: "잘못된 이메일 형식 입니다.",
            messageStyle,
            inputBorder,
          }
    }
  } else if (code == "password") {
    if (data.length <= 0) {
      return {
        error: true,
        message: "비밀번호를 입력해주세요.",
        messageStyle,
        inputBorder,
      }
    } else {
      return data.length > 8
        ? {
            error: false,
            message: "",
            messageStyle: {
              color: "",
              funtSize: "",
              marginTop: "",
            },
            inputBorder: "",
          }
        : {
            error: true,
            message: "비밀번호를 8자 이상 입력해주세요.",
            messageStyle,
            inputBorder,
          }
    }
  } else if (code == "nickname") {
    return data.length >= 1
      ? {
          error: false,
          message: "",
          messageStyle: {
            color: "",
            funtSize: "",
            marginTop: "",
          },
          inputBorder: "",
        }
      : {
          error: true,
          message: "닉네임을 입력해주세요.",
          messageStyle,
          inputBorder,
        }
  } else if (code == "passwordCheck") {
    console.log(data)

    return data["password1"] === data["password2"]
      ? {
          error: false,
          message: "",
          messageStyle: {
            color: "",
            funtSize: "",
            marginTop: "",
          },
          inputBorder: "",
        }
      : {
          error: true,
          message: "비밀번호가 일치하지 않습니다",
          messageStyle,
          inputBorder,
        }
  }
}
