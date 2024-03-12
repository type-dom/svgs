import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdCreateFillRestrictionSvg extends TypeSvgSvg {
  className: 'TdCreateFillRestrictionSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdCreateFillRestrictionSvg';
    this.addAttrObj({
      name: 'TdCreateFillRestrictionSvg',
      title: 'TdCreateFillRestrictionSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M945.031461 540.997428c-1.234107-6.404873-3.177366-12.841469-5.691629-18.641569l-0.156566-0.367367-0.172939-0.348947c-6.092765-13.434987-14.518668-26.183336-25.072025-37.892005-11.038404-12.275581-21.649066-21.051455-32.446993-26.867928-5.655813-2.944052-11.337209-5.251607-17.885346-7.293103-7.699356-2.335185-15.366989-3.622504-23.25361-3.973498-1.337461-0.048095-2.231831-0.064468-3.125177-0.064468-8.127098 0-16.338107 1.261737-24.419156 3.767813-9.475815 2.917446-18.597567 7.854898-27.064402 14.636349l-0.51063 0.410346-0.497327 0.424672c-4.164856 3.536546-8.974395 7.957229-14.32117 13.126972-4.812609 4.700045-8.889461 8.587586-12.313443 11.827373l-3.532453 3.369747-0.12075-0.118704-2.576685 2.667759-27.251667 25.866111 1.081635 1.109264-2.188852 2.275833-95.40693 98.397031-35.953863 37.084617-32.383548 33.422204c-9.936303 10.225899-18.256806 18.851347-24.894993 25.914206l-10.682293 11.212366-1.500167 1.578961c-6.182816 6.361895-11.18576 12.57234-15.047718 18.727527-3.177366 4.998851-6.152117 10.637268-8.740058 16.642029-2.487657 5.024433-4.897543 11.325953-7.823176 20.37198-2.503007 7.692193-5.090948 16.204054-7.761778 25.471115-2.539846 8.80862-4.943592 17.320481-7.227612 25.589818-2.927679 10.803044-4.589528 18.356067-5.456269 24.685215-3.02694 20.246113 0.782829 37.7293 11.398608 51.367925 6.360871 8.000208 20.253276 20.759813 45.185108 20.759813 3.098571 0 6.350638-0.189312 9.689686-0.565888l0.893346-0.102331 0.893346-0.151449c5.315052-0.846274 12.072967-2.403746 21.893636-5.039783 8.352225-2.25332 17.237593-4.948709 27.173896-8.231475 9.318226-3.122107 18.255783-6.30152 26.749224-9.513678 9.204639-3.542686 16.207124-6.54609 21.606087-9.230222 7.087419-3.294023 13.903661-7.53051 20.259416-12.613272 4.249791-3.326768 8.153704-6.619768 11.675924-9.871835 2.984984-2.538823 6.591115-6.139837 13.678534-13.396101 6.407943-6.646374 14.290471-14.856359 23.796986-24.77629 8.609075-9.072633 18.554588-19.255553 31.397081-32.199353l0.26606-0.264013 0.25685-0.281409 35.514865-37.038568 95.260597-98.253768 30.79026-31.746028-0.104377-0.102331 0.354064-0.317225c2.697435-2.431376 5.67014-5.273097 8.79634-8.468882 1.888-1.951445 4.119831-4.177136 6.675026-6.685259 3.083222-3.056616 6.490831-6.457062 10.268878-10.350742l0.653893-0.662079 0.611937-0.684592c7.003508-7.854898 12.30321-16.548908 15.736403-25.849738 3.366677-8.981559 5.102205-18.447141 5.102205-27.966958C947.106726 554.667775 946.410877 547.671431 945.031461 540.997428L945.031461 540.997428zM741.934856 741.216495l-35.514865 37.034475c-11.80179 11.896958-22.458501 22.786982-31.934317 32.765241-9.454326 9.875928-17.301038 18.031679-23.509437 24.464181-6.235005 6.392594-9.931187 10.085706-11.112082 10.937097-2.936889 2.78237-6.350638 5.666046-10.202363 8.6848-3.830235 3.062755-7.824199 5.525853-11.973706 7.402597-4.160763 2.106987-10.202363 4.689812-18.184151 7.767917-7.997138 3.012613-16.349363 5.988388-25.072025 8.916067-8.723685 2.888793-17.018605 5.4225-24.863271 7.534604-7.840572 2.109034-13.673417 3.499707-17.541515 4.119831-1.735527 0.204661-3.340071 0.291642-4.817726 0.291642-5.337565 0-9.058306-1.299599-11.147898-3.930519-2.65548-3.412726-3.39226-9.024537-2.217505-16.931624 0.586354-4.28049 2.001587-10.463306 4.202719-18.582217 2.242064-8.102538 4.589528-16.436344 7.103792-25.12626 2.514263-8.732895 4.943592-16.744359 7.316639-24.042579 2.37407-7.326872 4.290723-12.366655 5.78168-15.110139 1.766226-4.259 3.767813-8.157797 5.999644-11.655458 2.196015-3.5038 5.393847-7.390317 9.528004-11.654434 1.787716-1.86958 5.938246-6.194072 12.444427-13.056364 6.490831-6.91141 14.630209-15.347546 24.407899-25.406646l32.383548-33.411971 35.944654-37.08871 95.405907-98.404194 83.003436 86.053911L741.934856 741.216495 741.934856 741.216495zM901.248282 573.671595c-1.474584 3.982708-3.832282 7.77815-7.103792 11.43954-3.533476 3.64911-6.726192 6.824429-9.544377 9.617032-2.785439 2.732228-5.226025 5.185093-7.312546 7.324826-2.356674 2.415003-4.588505 4.572132-6.638187 6.399757l-83.004459-85.584214c3.553942-3.368724 7.788383-7.395434 12.648065-12.145621 4.882194-4.731768 8.959046-8.452509 12.215206-11.222599 4.129041-3.310396 8.436136-5.709025 12.857842-7.078209 4.01443-1.246387 7.979742-1.860371 11.859096-1.860371 0.408299 0 0.819668 0 1.234107 0.016373 4.275373 0.188288 8.435113 0.846274 12.417821 2.053776 4.003174 1.25048 7.469112 2.619664 10.42135 4.15667 6.235005 3.357468 13.119809 9.202593 20.661575 17.584494 7.557116 8.393157 13.364379 17.169031 17.529235 26.339902 1.192152 2.759857 2.143826 5.950526 2.854001 9.618055 0.75213 3.659343 1.12359 7.454786 1.12359 11.444657C903.469879 565.724599 902.748449 569.68684 901.248282 573.671595L901.248282 573.671595zM901.248282 573.671595',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M376.844787 887.09084 192.511525 887.09084c-31.668257 0-57.43613-26.576285-57.43613-59.240219L135.075395 196.125843c0-32.657794 25.767873-59.217706 57.43613-59.217706l612.482529 0c31.66314 0 57.414641 26.559912 57.414641 59.217706l0 160.797219c0 16.571421 13.034874 30.005384 29.096688 30.005384 16.066931 0 29.096688-13.43294 29.096688-30.005384L920.602072 196.131983c0-65.745377-51.868321-119.238708-115.606994-119.238708L192.511525 76.893274c-63.754023 0-115.618251 53.493332-115.618251 119.238708l0 631.719662c0 65.75254 51.864228 119.255081 115.618251 119.255081l184.333262 0c16.066931 0 29.096688-13.43908 29.096688-30.010501S392.911718 887.09084 376.844787 887.09084L376.844787 887.09084zM376.844787 887.09084',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M729.636762 272.729521c0-16.571421-13.034874-30.005384-29.096688-30.005384l-414.582273 0c-16.066931 0-29.096688 13.43294-29.096688 30.005384 0 16.57756 13.029758 30.010501 29.096688 30.010501l414.582273 0C716.601888 302.740022 729.636762 289.307082 729.636762 272.729521L729.636762 272.729521zM729.636762 272.729521',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath({ parent: this });
    path3.setData(
      'M285.958824 401.058259c-16.066931 0-29.096688 13.43294-29.096688 29.999245 0 16.576537 13.029758 30.010501 29.096688 30.010501l286.069341 0c16.071024 0 29.096688-13.43294 29.096688-30.010501 0-16.566304-13.025665-29.999245-29.096688-29.999245L285.958824 401.058259 285.958824 401.058259zM285.958824 401.058259',
    );
    this.childNodes.push(path3);
    const path4 = new SvgPath({ parent: this });
    path4.setData(
      'M448.387193 570.317197 285.958824 570.317197c-16.066931 0-29.096688 13.43294-29.096688 29.999245 0 16.57756 13.029758 30.010501 29.096688 30.010501l162.42837 0c16.065907 0 29.091572-13.43294 29.091572-30.010501C477.478765 583.751161 464.453101 570.317197 448.387193 570.317197L448.387193 570.317197zM448.387193 570.317197',
    );
    this.childNodes.push(path4);
    this.setConfig(config);
  }
}
