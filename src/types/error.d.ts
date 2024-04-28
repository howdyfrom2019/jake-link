interface NextErrorResponse {
  status: number;
  error: string;
}

interface NextError {
  status: number;
  error: string;
}

declare namespace NextError {
  type Response = NextErrorResponse;
}
