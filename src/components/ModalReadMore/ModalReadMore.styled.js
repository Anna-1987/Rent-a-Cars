import styled from 'styled-components';

export const ModalCarWrap = styled.div`
  margin: 0 auto;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

`;

export const ModalCard = styled.div`
  display: flex;
  width: 100%;
  height: 752px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const ModalImgWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;  
  width: 460px;
  height: 240px;
  object-fit: cover;
  border-radius: 14px;
  background: #F3F3F2;
`;

export const ModalImg = styled.img`
`;

export const ModalDescriptionWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

export const Block = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ModalTitleH3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 6px;
  color: #121417;
`;

export const Description = styled.p`
  margin-top: 12px;
  font-size: 12px;
  line-height: 1.42;
  height: 36px;
  color: rgba(18, 20, 23, 1);
`;

export const ModalTitleH4 = styled.h4`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
  color: rgba(18, 20, 23, 1);
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: #363535;
`;

export const ConditionsItem = styled.li`
  padding: 2px 8px;
  border-radius: 24px;
  background: #F9F9F9;
`;