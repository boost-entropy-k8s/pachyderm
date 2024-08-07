describe('mount', () => {
  beforeEach(() => {
    cy.resetApp();
    cy.isAppReady();
    cy.openMountPlugin();
  });

  it('should mount pachyderm repo', () => {
    cy.findByTestId('ProjectRepo-DropdownCombobox-li-default/images').click();
    cy.get('#jupyterlab-pachyderm-browser-pfs').findByText('images');
  });

  it('file browser should show correct breadcrumbs', () => {
    cy.findByTestId('ProjectRepo-DropdownCombobox-li-default/images').click();
    cy.get('#jupyterlab-pachyderm-browser-pfs').findByText('images').dblclick();
    cy.get('[id="pachyderm-mount"] div.jp-FileBrowser-crumbs')
      .first()
      .invoke('text')
      .should('eq', '/ pfs/images/');
  });

  it("should correctly mount a repo's branch", () => {
    cy.findByTestId('ProjectRepo-DropdownCombobox-li-default/images').click();
    cy.findByTestId('Branch-DropdownCombobox-input').click();
    cy.findByTestId('Branch-DropdownCombobox-li-branch').click();
    cy.get('#jupyterlab-pachyderm-browser-pfs')
      .findByText('images_branch')
      .dblclick();
    cy.get('#jupyterlab-pachyderm-browser-pfs')
      .findAllByText('branch.png')
      .should('have.length', 1);
  });

  it('should open mounted directory in the file browser on click', () => {
    cy.findByTestId('ProjectRepo-DropdownCombobox-li-default/images').click();
    cy.get('#jupyterlab-pachyderm-browser-pfs').findByText('images').dblclick();
    cy.findAllByText('liberty.png').should('have.length', 1);
  });

  it('file browser should show correct right click actions', () => {
    cy.findByTestId('ProjectRepo-DropdownCombobox-li-default/images').click();
    cy.get('#jupyterlab-pachyderm-browser-pfs').findByText('images').dblclick();
    cy.findAllByText('liberty.png').first().rightclick();
    cy.get('ul.lm-Menu-content')
      .children()
      .should('have.length', 4)
      .first()
      .should('have.text', 'Open')
      .next()
      .should('have.text', 'Copy Path')
      .next()
      .should('have.text', 'Download')
      .next()
      .should('have.text', 'Copy Pachyderm File URI');
  });

  it('file browser should have loading attribute', () => {
    cy.findByTestId('ProjectRepo-DropdownCombobox-li-default/images').click();
    cy.get('ul.jp-DirListing-content[loading]').should('have.length', 2);
  });
});
