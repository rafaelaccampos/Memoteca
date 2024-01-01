import {render, screen, fireEvent } from '@testing-library/angular';
import { CreateThoughtComponent } from './create-thought.component';

describe('CreateThoughtComponent', () => {
  let component: CreateThoughtComponent;
  /*beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateThoughtComponent]
    });
    fixture = TestBed.createComponent(CreateThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
*/

  fit('should be able to create a thought', async () => {
    //Renderizar o componente
    await render(CreateThoughtComponent);

    //Preencher o pensamento (input)
    //Preencher a autoria e a fonte (input)
    //Selecionar o modelo do card
    //Clicar no botão salvar
    //Verificar se foi redirecionado para a lista
  });

  it('should be able to cancel a thought', () => {
    //Renderizar o componente
    //Clicar no botão salvar
    //Verificar se foi redirecionado para a lista
  });
});
