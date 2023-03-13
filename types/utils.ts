interface IIcon {
  name: string;
  icon: string;
  action: () => void;
}
interface ISetting {
  iconName: string;
  name: string;
  option: string | null;
  action?: () => void;
}

interface IInvoice {
  period: string;
  downloadUrl: string;
  fileName: string;
  ammount: number;
}
