import cn from "classnames";

function FlipCard({ card }: any) {
  return (
    <div 
      className={cn("flip-card-outer")} 
    >
      <div
        className={cn("flip-card-inner", {
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front bg-white text-black w-full h-full absolute">
          <div className="card body justify-content-center align-items-center">
          <img
            className="w-[244px] object-cover h-[244px] relative inline-flex border-4 border-[#00C4EF] rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-[#007D98] bg-indigo-50"
            alt={card.front_name}
            src={card.image}
          /> <br/>
            <p className="card-text fs-5 fw-bold">{card.front_name}</p>
            <p className="card-text fs-6 fw-bold">{card.title}</p>
          </div>
        </div>
        <div className="card back bg-white text-black">
          <div className="card-body my-8 justify-content-center align-items-center text-center">
            <p className="card-text fs-3 fw-bold">{card.front_name}</p> <br/>
            <ul className="flex flex-column mt-2">
              <table className="table-auto w-full">
                  <tbody>
                  <tr className="h-[50px]">
                  <td className="w-[40px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007D98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </td>
                  <td className="w-70 text-left"><p className="card-text fs-5">{card.email}</p></td>
                  </tr>
                  <tr className="h-[50px]">
                    <td className="w-[40px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007D98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </td>
                    <td className="w-70 text-left"><p className="card-text fs-5">{card.phone}</p></td>
                  </tr>
                  <tr className="h-[50px]">
                    <td className="w-[40px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#007D98"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/></svg>
                    </td>
                    <td className="w-70 text-left"><p className="card-text fs-10">{card.linkedin}</p></td>
                  </tr>
                  </tbody>
                </table>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;