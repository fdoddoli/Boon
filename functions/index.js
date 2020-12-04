const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.setToken = functions.firestore
  .document("Usuarios/{usuarioId}")
  .onCreate(doc => {
    const user = doc.data();
    let rol;
    if (user.rol) {
      rol = user.rol;
    }
    return admin.auth().setCustomUserClaims(user.studentBoonID, {
      schoolCode: user.schoolCode,
      rol: rol
    });
  });
