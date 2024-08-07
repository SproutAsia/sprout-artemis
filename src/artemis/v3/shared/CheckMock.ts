export default function CheckMock() {
  return process.env.ARTEMIS_MODE === "MOCK"
}