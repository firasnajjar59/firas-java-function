class Firas{
    static copyArry (a) {
        if (typeof a == "object" && !Array.isArray(a)){
        let b = {...a};
        for (let i in a) {
          if (typeof a[i] == "object") {
            b[i] = copyarry(a[i]);
          }
        }
        return b;
      }else if(Array.isArray(a)){
        let b = [...a];
        for (let i in a) {
          if (typeof a[i] == "object") {
            b[i] = copyarry(a[i]);
          }
        }
        return b;
        }
      };

      static emailValidation(id) {
        let id1 = document.getElementById(id);
        let emailArr = id1.value.split("@");
        if (emailArr.length == 2) {
          let emailArr2 = emailArr[1].split(".");
          if (emailArr2.length > 1) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }

      static passwordValidation(id,min,max) {
        let id1 = document.getElementById(id);
        let valuePass = String(id1.value);
        if (
          valuePass.length >= min &&
          valuePass.length <= max &&
        //   id1.value.includes("if")
        ) {
          return true;
        } else {
          return false;
        }
      }

      
    }
