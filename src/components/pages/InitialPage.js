import React, {useContext} from "react";

export default ({...props}) => {
  useEffect(() => {
    const updateUserInfo = async () => {
        if (globalState.user) {
            const ref = await db.collection("users").doc(globalState.user).get();
            if (ref.exists) {
                globalDispatch({type: 'USER_INFO_UPDATED', userInfo: ref.data()});
            }
        }
    };

    if (!globalState.userInfo) {
        updateUserInfo();
    }
}, [globalState.userInfo]);
return (
  <div>
    Basic page
  </div>
}