import { HEADERFONT } from "../../../types/fonts";

export type CarNumberProps = {
  carNumber?: string;
};

const CarNumber = ({ carNumber = "데이터없음" }: CarNumberProps) => {
  return <span style={HEADERFONT.H1}>{carNumber}</span>;
};

export default CarNumber;
