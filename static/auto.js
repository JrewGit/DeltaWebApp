function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

var countries = ['SDR', 'AGP', 'FRA', 'AUH', 'OMA', 'ATL', 'YQQ', 'PVR', 'CPH', 'PEK', 'CZM', 'DEN', 'DTW', 'ATH', 'HER', 'YUL', 'TPA', 'IND', 'SFB', 'BDL', 'MDW', 'SEA', 'SSG', 'LOS', 'FLL', 'GIG', 'FCO', 'CLT', 'MLB', 'BOS', 'BUR', 'ORF', 'ECP', 'PHX', 'PHL', 'CVG', 'BIO', 'CAG', 'MAD', 'EYW', 'HDN', 'DFW', 'SJD', 'IAD', 'LEX', 'DCA', 'SJU', 'LHR', 'MCT', 'MSY', 'MIA', 'LIR', 'ORD', 'HUX', 'MTY', 'MCI', 'SWO', 'LAX', 'CDG', 'COS', 'PBI', 'PIE', 'SBN', 'CUN', 'MSP', 'DAY', 'MBJ', 'EGE', 'EWR', 'JIB', 'DSM', 'SKB', 'FKL', 'PIT', 'LGW', 'SNN', 'FIH', 'BRU', 'POP', 'ICT', 'EIS', 'TMS', 'ACC', 'PVD', 'ABE', 'MUC', 'PRN', 'CMF', 'LIS', 'BGY', 'YHZ', 'AZS', 'ADD', 'DUB', 'CHS', 'MYR', 'LUX', 'LGA', 'DEL', 'RDU', 'JAN', 'FSD', 'MFR', 'PSP', 'BHM', 'MAZ', 'PAP', 'PNS', 'PVG', 'NEV', 'JFK', 'GRU', 'LCA', 'SXM', 'PVC', 'DUS', 'TZX', 'GJT', 'TUN', 'HPN', 'SBA', 'OAK', 'GEO', 'LWB', 'RZE', 'PIK', 'SBZ', 'AMS', 'DSA', 'BFS', 'AUG', 'DAR', 'ZRH', 'YYZ', 'BOG', 'MKE', 'BJL', 'DSS', 'SVQ', 'CRA', 'MEX', 'GNV', 'NCE', 'TLV', 'PUJ', 'BTV', 'MSN', 'TYS', 'UVF', 'CLO', 'LIM', 'PLS', 'SLC', 'LAS', 'BWI', 'SJO', 'SBP', 'GCK', 'VPS', 'AUS', 'MDT', 'SWF', 'CLE', 'GSP', 'ROC', 'PTY', 'CNF', 'TLS', 'JAX', 'MCO', 'MEM', 'SPS', 'NKG', 'DJE', 'RMU', 'TBS', 'BTR', 'SBH', 'YOW', 'HOU', 'SFO', 'MLA', 'JNB', 'SAP', 'EBB', 'SAL', 'NAS', 'ELH', 'RSD', 'STR', 'FEZ', 'BCN', 'GND', 'MGA', 'SGF', 'TLH', 'IAH', 'POS', 'FAT', 'BJX', 'HSV', 'CRP', 'KRK', 'EDI', 'ZBF', 'ACK', 'EWB', 'CLL', 'PSA', 'BNA', 'GRR', 'NBO', 'HNL', 'OPO', 'GSO', 'ZCL', 'RIC', 'GDL', 'SDF', 'MDE', 'CAE', 'STX', 'GPT', 'AZA', 'ATW', 'FSM', 'ALB', 'CRW', 'MZT', 'SJC', 'ROS', 'PTP', 'LIT', 'YTZ', 'CMH', 'DAL', 'EZE', 'BPS', 'KEF', 'GDN', 'HAM', 'MTJ', 'LCG', 'STL', 'CGN', 'STT', 'XNA', 'SAV', 'JAC', 'MSO', 'BGI', 'QRO', 'SEZ', 'MOB', 'ELP', 'SAN', 'MVY', 'DUJ', 'BGR', 'RIX', 'TAO', 'LEJ', 'MAN', 'AUA', 'ZLO', 'GUA', 'GLA', 'BUD', 'AVP', 'CAI', 'OGG', 'LEB', 'DOH', 'SLK', 'PHF', 'GRX', 'YEG', 'LNZ', 'VVC', 'RKD', 'BEG', 'SDQ', 'RNO', 'OAJ', 'ALG', 'YXE', 'CUZ', 'MAO', 'BOI', 'SUX', 'CUR', 'BON', 'YWG', 'CAN', 'YHM', 'ERI', 'MCE', 'BKK', 'VCT', 'SYR', 'COU', 'ILM', 'MWA', 'SRQ', 'YYR', 'CLJ', 'RAI', 'CHO', 'YYC', 'CKG', 'ESC', 'RUT', 'VQS', 'AOO', 'ORH', 'ROA', 'FWA', 'YVR', 'IST', 'OTP', 'MRS', 'CUU', 'NVA', 'PDX', 'FDF', 'BSB', 'GCM', 'SNA', 'MLE', 'CAK', 'HKG', 'MCZ', 'IGR', 'CCS', 'TBN', 'SVO', 'DAB', 'HAV', 'ORY', 'YGL', 'KOA', 'NRT', 'IEV', 'LFW', 'BUF', 'OGS', 'RSW', 'SLW', 'MRY', 'MGW', 'BRO', 'VRA', 'MLI', 'RAP', 'FAY', 'FUK', 'MGM', 'SIN', 'HEL', 'ANU', 'CMN', 'CTG', 'MXP', 'YGW', 'LYH', 'GYD', 'BZN', 'AMM', 'BAH', 'ROW', 'MFE', 'DPS', 'YYT', 'TUS', 'CID', 'PGD', 'CHA', 'OAX', 'MHT', 'SCL', 'ARN', 'LGB', 'PIA', 'WAW', 'EMA', 'ELD', 'CEZ', 'SLU', 'RUH', 'BLA', 'AGS', 'CEC', 'SMF', 'ANC', 'HRL', 'KIN', 'AVL', 'CTS', 'OKC', 'YQG', 'EYP', 'MDZ', 'HOT', 'COR', 'ABV', 'DEC', 'PBC', 'HND', 'LBV', 'DWC', 'SCE', 'LAD', 'VIE', 'CMW', 'KIX', 'OUA', 'LIH', 'UIB', 'PBM', 'FPO', 'PDT', 'LBB', 'SLA', 'FSP', 'GVA', 'FNT', 'ASE', 'ZIH', 'VVI', 'DUT', 'TUL', 'BAQ', 'MAF', 'HYA', 'SAT', 'TUC', 'STI', 'PXM', 'AMA', 'EWN', 'SHV', 'PRG', 'PBG', 'MHH', 'BMI', 'MDQ', 'NSI', 'PGV', 'HTS', 'COO', 'TGZ', 'OXB', 'NIM', 'SJT', 'DLA', 'DME', 'TIJ', 'MVD', 'YQR', 'BFD', 'DGO', 'UIO', 'FAR', 'GRK', 'TUP', 'JED', 'SNU', 'MSL', 'BZE', 'GGT', 'FLO', 'YYG', 'LRM', 'BKO', 'TXL', 'BDA', 'ABJ', 'ART', 'SSA', 'FOR', 'CKY', 'EVV', 'YUM', 'TRI', 'HHH', 'SBY', 'TYR', 'YYJ', 'SAF', 'FTE', 'FLN', 'HVN', 'STS', 'YZR', 'CJS', 'ONT', 'DXB', 'IRK', 'LMM', 'IGU', 'JDO', 'VCP', 'MLM', 'OSL', 'POA', 'LTO', 'YLW', 'ABQ', 'HMO', 'MID', 'BIL', 'PQM', 'NGO', 'TAM', 'CMI', 'DRO', 'TRC', 'YXU', 'MHK', 'PWM', 'SLP', 'BQN', 'ITO', 'FLG', 'BOM', 'BFL', 'GUM', 'TOL', 'ABI', 'AKL', 'PPT', 'KWI', 'CIU', 'SYD', 'LFT', 'PDL', 'LPB', 'ICN', 'ITH', 'HOG', 'MNL', 'BEL', 'LYS', 'CKB', 'DRT', 'HIB', 'JLN', 'BPT', 'LAN', 'GRI', 'LCH', 'MLU', 'LRD', 'CUL', 'REC', 'YDF', 'LAW', 'GEG', 'POB', 'FCA', 'GYE', 'MEL', 'KBP', 'SGU', 'RDM', 'TPE', 'NAN', 'YXX', 'CTU', 'BIF', 'TGU', 'VQQ', 'PTK', 'LBA', 'BKW', 'NDR', 'DZA', 'SID', 'VCE', 'TFS', 'XIY', 'TNG', 'WUH', 'FLR', 'ABZ', 'GOT', 'MAR', 'PUU', 'CWA', 'RTB', 'BZV', 'TCB', 'BHB', 'ELM', 'STC', 'SHJ']


autocomplete(document.getElementById("myInput"), countries);
autocomplete(document.getElementById("myInput2"), countries);