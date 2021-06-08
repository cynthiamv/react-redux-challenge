import styled from 'styled-components';
import { ReactComponent as Dots } from '../../assets/dots.svg';

export const DotsIcon = styled(Dots)`
  width: 14px;
	display: inline-block;
	vertical-align: bottom;
`

export const TableStyled = styled.table`
	margin: 40px 16px;
	width: 90%;
	.table-headers {
		font-size: 0.875rem;
		text-align: inherit;
		padding: 0 0 20px 0;
		p {
			display: inline-block;
			color:#717171;
		}
	}
	@media (min-width: 775px) {
    margin: 40px 50px;
  }
	@media (min-width: 992px) {
    width: 60%;
		height: min-content;
  }
`