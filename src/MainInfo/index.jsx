import React from "react";
import Calendar from "./Calendar";
import GreenBackground from "./GreenBackground";

const MainInfo = () => {
  return (
    <div className="main">
      <div className="main__status">
        <GreenBackground />
      </div>
      <div className="main__container">
        <h4 class="main__container_title">Сертификат COVID-19</h4>
        <div className="main__container_oval">
          <span className="main__container_oval_name">Действителен</span>
        </div>
        <h4 className="main__number">№ 1000 3784 2142 3051</h4>
      </div>
      <div className="main__validity">
        <span className="main__validity_calendar">
          <Calendar />
        </span>
        <div className="main__validity_date">Действует до 16.12.2022</div>
      </div>
      <div className="main__fio">
        <div className="main__fio_name">
          <span className="main__fio_name_string">
            Ш***** С***** В***********
          </span>
        </div>
        <div className="main__fio_other">
          <div className="main__fio_other_birth">
            <div className="main__fio_other_birth_string">Дата рождения:</div>
            <div className="main__fio_other_birth_number">15.06.1996</div>
          </div>
          <div className="main__fio_other_passport">
            <div className="main__fio_other_passport_string">Паспорт:</div>
            <div className="main__fio_other_passport_number"> 39** ***748</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
