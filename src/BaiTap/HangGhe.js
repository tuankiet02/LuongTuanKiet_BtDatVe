import React, { Component } from "react";
import { connect } from "react-redux";
class HangGhe extends Component {
  danhSachGheNgoi = () => {
    return this.props.item.danhSachGhe.map((ghe, index) => {
      let gheDuocChon = "";
      let isDisabled = false;

      if (ghe.daDat) {
        gheDuocChon = "gheDuocChon";
        isDisabled = true;
      }

      let viTriGheDangChon = this.props.danhSachGheDangChon.findIndex(
        (gheDangChon) => gheDangChon.soGhe === ghe.soGhe
      );
      let gheDangChonCss = "";
      if (viTriGheDangChon !== -1) {
        gheDangChonCss = "gheDangChon";
      }

      if (this.props.item.hang == "") {
        return (
          <button className="rowNumber fw-bold" key={index}>
            <span>{ghe.soGhe}</span>
          </button>
        );
      } else {
        return (
          <button
            disabled={isDisabled}
            className={`ghe ${gheDuocChon} ${gheDangChonCss}`}
            key={index}
            onClick={() => {
              this.props.datGhe(ghe);
            }}
          >
            {ghe.soGhe}
          </button>
        );
      }
    });
  };
  render() {
    let { hang } = this.props.item;
    console.log(this.props.datGhe);
    return (
      <div className="text-light">
        <div className="mt-2">
          <span className="fw-bold text-warning">{hang}</span>
          {this.danhSachGheNgoi()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangChon: state.thongTinDatVeReduxcer.danhSachGheDangChon,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
    },
    huyDatGhe: (ghe) => {
      dispatch({
        type: "HUY_DAT_GHE",
        ghe,
      });
    },
  };
};

const ReduxComponent = connect(mapStateToProps, mapDispatchToProps)(HangGhe);
export default ReduxComponent;
