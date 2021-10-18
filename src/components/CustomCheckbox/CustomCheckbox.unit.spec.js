import React from 'react'
import { render, screen } from '@testing-library/react'

import { CustomCheckbox } from '.'

describe('<CustomCheckbox />', () => {
  it('should render the heading', () => {
    render(<CustomCheckbox />)

    
    expect(screen.getByText('Checkbox ativo')).toBeInTheDocument();
//    expect(screen.getByRole('heading', { name: /CustomCheckbox/i })).toBeInTheDocument()

  })

  /*
    it('should render without any marker', () => {
      render(<CustomCheckbox />)

      // Gera um link para o playground de teste
      screen.logTestingPlaygroundURL()

    })
  */

  /*
    it('should render debug HTML', () => {
      const { debug } = render(<CustomCheckbox />)
      debug()
    })
  */

  /*
    it('created Snapshot', () => {
    const { container } = render(<CustomCheckbox />)
    expect(container.firstChild).toMatchSnapshot()
   })
  */

})
