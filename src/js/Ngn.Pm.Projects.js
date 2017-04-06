Ngn.Pm.ProjectDialog = new Class({
  Extends: Ngn.Dialog.RequestForm.Json,
  options: {
    title: 'Редактирование',
    // @requiresBefore src/formTmpl/project.js
    formTmpl: Ngn.formTmpl.project,
    id: 'user',
    dialogClass: 'dialog fieldFullWidth',
    width: 200
  }
});

Ngn.Pm.Projects = new Class({

  initialize: function () {
    new Ngn.Grid({
      basePath: Ngn.serverConfig.url(),
      restBasePath: '',
      basicBasePath: '',
      tools: {
        edit: 'Редактировать'
      },
      toolActions: {
        edit: function (row, opt) {
          new Ngn.Pm.ProjectDialog({
            url: Ngn.serverConfig.url() +
            '/api/v1' + '/user/' + row.id,
            onOkClose: function () {
              this.reload(row.id);
            }.bind(this)
          });
        }
      }
    }).reload();
  }

});