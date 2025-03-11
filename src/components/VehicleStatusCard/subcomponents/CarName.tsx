import { BODYFONT } from "../../../types/fonts";

export type CarNameProps = {
  carName?: string;
};

const CarName = ({ carName = "데이터 없음" }: CarNameProps) => {
  return <span style={BODYFONT.B1}>{carName}</span>;
};

export default CarName;
