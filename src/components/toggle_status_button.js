const StatusToggleButton = ({ markAsStatus, invoiceId, invoiceStatus }) => {
  return (
    <button
      onClick={() => markAsStatus(invoiceId)}
      className=" font-bold px-[1.5rem] py-[1rem] bg-[rgba(124,93,250,1)] rounded-full h-[3rem] transition-all hover:bg-[rgba(146,119,255,1)] text-white text-[0.75rem]"
    >
      {invoiceStatus === "paid" ? "Mark as Pending" : "Mark as Paid"}
    </button>
  );
};

export default StatusToggleButton;
