module.exports = ['ModalRouteProvider', function(ModalRouteProvider) {
    ModalRouteProvider.modal('photoUploader', {
        component: 'modalPhotoUploaderComponent'
    });

    ModalRouteProvider.modal('fundTopUp', {
        component: 'modalFundTopUpComponent'
    });

    ModalRouteProvider.modal('employeeEdit', {
        component: 'modalEmployeeEditComponent'
    });

    ModalRouteProvider.modal('modalNotification', {
        component: 'modalNotificationComponent'
    });

    ModalRouteProvider.modal('modalPinCode', {
        component: 'modalPinCodeComponent'
    });

    ModalRouteProvider.modal('modalAuth', {
        component: 'modalAuthComponent'
    });
}];