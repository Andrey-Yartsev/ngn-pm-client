Ngn.Pm.ProjectDialog = new Class({
  Extends: Ngn.Dialog.RequestForm,
  options: {
    title: 'Редактирование',
    id: 'user',
    dialogClass: 'dialog fieldFullWidth'
  }
});

var defaultDialogOpts = {
  width: 250
};

Ngn.Pm.Projects = new Class({

  initialize: function () {
    new Ngn.Grid({
      basePath: Ngn.serverConfig.url(),
      restBasePath: '',
      basicBasePath: '',
      tools: {
        edit: 'Редактировать',
        delete: 'Удалить',
      },
      menu: [Ngn.Grid.menu['new']],
      formatters: {
        domain: function(domain) {
          return '<a href="http://'+domain+'" target="_blank">'+domain+'</a>';
        }
      },
      toolActions: {
        edit: function (row, opt) {
          new Ngn.Pm.ProjectDialog(Object.merge({
            url: Ngn.serverConfig.url() + '/json_edit/' + row.id,
            onOkClose: function () {
              this.reload(row.id);
            }.bind(this)
          }, defaultDialogOpts));
        }
      }
    }).reload();
    Ngn.Grid.defaultDialogOpts = defaultDialogOpts;
  }

});