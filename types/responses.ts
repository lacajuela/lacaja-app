interface IAuthenticationResponse {
  token: string;
}

interface IProfileResponse {
  name: string;
  dni: string;
}

type ListInvoiceResponse = IInvoice[];
