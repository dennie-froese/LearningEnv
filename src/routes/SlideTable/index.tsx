import React from "react";
import { useHistory } from "react-router-dom";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  tableRows: Record<number, [string, string, string]> | undefined;
}

function SlideTable({ slideText, slideNumber, type, tableRows }: Props) {
  const context = useSlidesState();
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const history = useHistory();

  const activeRow =
    slideNumber === 22 || slideNumber === 23
      ? 1
      : slideNumber === 24 || slideNumber === 25
      ? 2
      : slideNumber === 26 || slideNumber === 27
      ? 3
      : slideNumber === 28 || slideNumber === 29
      ? 4
      : 5;

  const activeCell =
    slideNumber === 22
      ? 1
      : slideNumber === 23
      ? 2
      : slideNumber === 24
      ? 3
      : slideNumber === 25
      ? 4
      : slideNumber === 26
      ? 5
      : slideNumber === 27
      ? 6
      : slideNumber === 28
      ? 7
      : slideNumber === 29
      ? 8
      : slideNumber === 30
      ? 9
      : 10;

  function amIActiveRow(myRow: number) {
    return myRow === activeRow
      ? "Slide-table-cell-first-column-active"
      : "Slide-table-cell-first-column";
  }

  function amIActiveCell(myCell: number) {
    return myCell === activeCell
      ? "Slide-table-cell-active"
      : "Slide-table-cell";
  }

  const finish = () => {
    const user = context?.user ? context.user : "";
    const obj = type === "Willkommen" ? { vpn: user } : null;
    if (
      context?.answers?.demographisch_intro?.auswahlSchuelerStudent &&
      context?.answers?.demographisch_intro?.auswahlSchuelerStudent ===
        "Schüler*in"
    ) {
      history.push("/schueler");
    } else {
      dispatch &&
        launchTime &&
        dispatch({
          type: "submit_slide",
          payload: {
            type: type,
            answer: { zeit: launchTime - Date.now(), ...obj },
          },
        });
      restart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-table-main">
          <div className="Slide-table-header-row">
            <div className="Slide-table-cell-empty"></div>
            <div className="Slide-table-header-cell">
              {tableRows && tableRows[0][0]}
            </div>
            <div className="Slide-table-header-cell">
              {tableRows && tableRows[0][1]}
            </div>
          </div>
          <div className="Slide-table-row">
            <div className={amIActiveRow(1)}>
              <div className="Slide-text-m">{tableRows && tableRows[1][0]}</div>
            </div>
            <div className={amIActiveCell(1)}>
              <div className="Slide-text-m">{tableRows && tableRows[1][1]}</div>
            </div>
            <div className={amIActiveCell(2)}>
              <div className="Slide-text-m">{tableRows && tableRows[1][2]}</div>
            </div>
          </div>
          <div className="Slide-table-row">
            <div className={amIActiveRow(2)}>
              <div className="Slide-text-m">{tableRows && tableRows[2][0]}</div>
            </div>
            <div className={amIActiveCell(3)}>
              <div className="Slide-text-m">{tableRows && tableRows[2][1]}</div>
            </div>
            <div className={amIActiveCell(4)}>
              <div className="Slide-text-m">{tableRows && tableRows[2][2]}</div>
            </div>
          </div>
          <div className="Slide-table-row">
            <div className={amIActiveRow(3)}>
              <div className="Slide-text-m">{tableRows && tableRows[3][0]}</div>
            </div>
            <div className={amIActiveCell(5)}>
              <div className="Slide-text-m">{tableRows && tableRows[3][1]}</div>
            </div>
            <div className={amIActiveCell(6)}>
              <div className="Slide-text-m">{tableRows && tableRows[3][2]}</div>
            </div>
          </div>
          <div className="Slide-table-row">
            <div className={amIActiveRow(4)}>
              <div className="Slide-text-m">{tableRows && tableRows[4][0]}</div>
            </div>
            <div className={amIActiveCell(7)}>
              <div className="Slide-text-m">{tableRows && tableRows[4][1]}</div>
            </div>
            <div className={amIActiveCell(8)}>
              <div className="Slide-text-m">{tableRows && tableRows[4][2]}</div>
            </div>
          </div>
          <div className="Slide-table-row">
            <div className={amIActiveRow(5)}>
              <div className="Slide-text-m">{tableRows && tableRows[5][0]}</div>
            </div>
            <div className={amIActiveCell(9)}>
              <div className="Slide-text-m">{tableRows && tableRows[5][1]}</div>
            </div>
            <div className={amIActiveCell(10)}>
              <div className="Slide-text-m">{tableRows && tableRows[5][2]}</div>
            </div>
          </div>
        </div>
        <div className="Slide-nav">
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideTable;
