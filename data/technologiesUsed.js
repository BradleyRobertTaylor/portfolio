const technologies = [
  {
    technology: "JavaScript",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm7.334 13.055c.72.58 1.438.865 2.156.858.44 0 .778-.08 1.012-.242a.75.75 0 00.341-.66.971.971 0 00-.34-.748c-.235-.205-.679-.41-1.332-.616-.784-.227-1.39-.52-1.815-.88-.418-.36-.63-.862-.638-1.507 0-.609.264-1.118.792-1.529.514-.41 1.17-.616 1.97-.616 1.114 0 2.009.271 2.683.814l-.77 1.199a2.597 2.597 0 00-.935-.462 3.211 3.211 0 00-.946-.165c-.38 0-.685.07-.913.209-.227.14-.34.323-.34.55 0 .25.139.462.417.638.28.169.756.356 1.43.561.814.242 1.394.565 1.738.968.345.403.517.917.517 1.54 0 .638-.245 1.188-.737 1.65-.484.455-1.188.693-2.112.715-1.21 0-2.222-.363-3.036-1.089l.858-1.188zm-5.53.638c.235.147.517.22.847.22.345 0 .63-.099.858-.297.227-.205.341-.561.341-1.067v-5.302h1.485v5.588c-.022.865-.271 1.489-.748 1.87a2.466 2.466 0 01-.891.484 3.296 3.296 0 01-.935.143c-.55 0-1.038-.095-1.463-.286-.455-.205-.836-.568-1.144-1.089l1.034-.847c.19.257.396.451.616.583z"></path>
      </svg>
    ),
  },
  {
    technology: "HTML",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z"></path>
      </svg>
    ),
  },
  {
    technology: "CSS",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path>
      </svg>
    ),
  },
  {
    technology: "Ruby",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M18.8 2.07c2.52.43 3.24 2.16 3.2 3.97V6l-1.14 14.93-14.78 1.01h.01c-1.23-.05-3.96-.17-4.09-3.99l1.37-2.5 2.77 6.46 2.36-7.62-.05.01.02-.02 7.71 2.46-1.99-7.78 7.35-.46-5.79-4.74 3.05-1.7v.01M2 17.91v.02-.02M6.28 6.23c2.96-2.95 6.79-4.69 8.26-3.2 1.46 1.47-.08 5.09-3.04 8.03-3 2.94-6.77 4.78-8.24 3.3-1.47-1.49.04-5.19 3.01-8.13h.01z"
        ></path>
      </svg>
    ),
  },
  {
    technology: "TypeScript",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19.24 3H4.76A1.76 1.76 0 003 4.76v14.48A1.76 1.76 0 004.76 21h14.48A1.76 1.76 0 0021 19.24V4.76A1.76 1.76 0 0019.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 01-.67.74 3 3 0 01-1 .39 5.81 5.81 0 01-1.2.12 7 7 0 01-1.23-.11 4.52 4.52 0 01-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 001 .54 3.06 3.06 0 001.13.2 2.58 2.58 0 00.6-.06 1.47 1.47 0 00.42-.17.75.75 0 00.25-.25.69.69 0 00-.06-.74 1.24 1.24 0 00-.35-.33 3.12 3.12 0 00-.53-.3l-.67-.28a3.57 3.57 0 01-1.37-1 2 2 0 01-.46-1.33 2.16 2.16 0 01.24-1.06 2.09 2.09 0 01.66-.71 2.88 2.88 0 011-.42 5.11 5.11 0 011.19-.13 7 7 0 011.09.07 4.53 4.53 0 01.88.23v1.65a2.42 2.42 0 00-.42-.24 3.58 3.58 0 00-.49-.17 3 3 0 00-.49-.1 2.45 2.45 0 00-.46 0 2.29 2.29 0 00-.56.06 1.54 1.54 0 00-.43.16.78.78 0 00-.26.25.63.63 0 00-.09.33.62.62 0 00.1.35 1.19 1.19 0 00.3.29 2.15 2.15 0 00.46.28l.63.28a6.56 6.56 0 01.84.42 2.65 2.65 0 01.64.49 1.79 1.79 0 01.42.63 2.48 2.48 0 01.14.85 2.68 2.68 0 01-.25 1.08z"></path>
      </svg>
    ),
  },
  {
    technology: "Node",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 00-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z"></path>
      </svg>
    ),
  },
  {
    technology: "React",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M14.448 16.24a21.883 21.883 0 01-1.747 2.175c1.673 1.623 3.228 2.383 4.091 1.884.863-.498.982-2.225.413-4.484-.853.19-1.779.334-2.757.424zm-1.31.087a27.48 27.48 0 01-2.275 0c.376.492.758.948 1.137 1.363.38-.415.761-.871 1.138-1.364zm5.04-7.894c2.665.764 4.406 2.034 4.406 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.44 4.832-.887 5.598-1.327.767-3.297-.105-5.292-2.031-1.994 1.925-3.964 2.798-5.291 2.031-1.328-.766-1.557-2.908-.887-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.44-4.832.887-5.599 1.327-.766 3.297.106 5.291 2.032 1.995-1.926 3.965-2.798 5.292-2.032 1.327.767 1.557 2.909.887 5.599zm-.973-.248c.57-2.26.45-3.986-.413-4.485-.863-.498-2.418.262-4.09 1.885a21.932 21.932 0 011.746 2.175c.978.09 1.904.234 2.757.425zm-10.41 7.63c-.569 2.26-.45 3.986.414 4.484.863.498 2.418-.261 4.09-1.884a21.866 21.866 0 01-1.746-2.176 21.883 21.883 0 01-2.757-.425zm4.068-8.142a27.507 27.507 0 012.275 0A20.537 20.537 0 0012 6.31c-.38.416-.76.872-1.137 1.364zm-1.31.087a21.865 21.865 0 011.746-2.175C9.627 3.962 8.072 3.202 7.21 3.7c-.863.499-.983 2.226-.413 4.485.853-.19 1.779-.334 2.757-.425zm4.34 7.52A25.373 25.373 0 0015.788 12a25.363 25.363 0 00-1.893-3.28 25.37 25.37 0 00-3.787 0A25.368 25.368 0 008.213 12a25.39 25.39 0 001.894 3.28 25.398 25.398 0 003.787 0zm1.285-.132c.615-.08 1.2-.182 1.75-.303a20.512 20.512 0 00-.612-1.667 27.546 27.546 0 01-1.137 1.97zM8.822 8.851c-.615.08-1.2.183-1.75.304.17.536.375 1.094.613 1.667a27.518 27.518 0 011.137-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.303a27.528 27.528 0 01-1.137-1.97 20.51 20.51 0 00-.613 1.667zm-.978-.245c.262-.834.6-1.708 1.01-2.6a21.88 21.88 0 01-1.01-2.6c-2.241.636-3.677 1.604-3.677 2.6s1.436 1.963 3.677 2.6zM16.93 9.155a20.479 20.479 0 00-1.75-.304 27.541 27.541 0 011.137 1.97c.238-.572.442-1.13.613-1.666zm.977.245c-.26.834-.6 1.708-1.01 2.6.41.892.75 1.766 1.01 2.6 2.242-.637 3.678-1.604 3.678-2.6s-1.436-1.963-3.678-2.6zM12 13.879a1.88 1.88 0 110-3.758 1.88 1.88 0 010 3.758z"></path>
      </svg>
    ),
  },
  {
    technology: "PostgreSQL",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M16.805 1a9.85 9.85 0 0 0-2.603.37l-.06.018a10.629 10.629 0 0 0-1.615-.151c-1.113-.019-2.07.243-2.84.68c-.76-.256-2.336-.697-3.997-.609c-1.157.061-2.419.402-3.354 1.36c-.933.958-1.426 2.44-1.322 4.457c.028.557.191 1.464.463 2.64c.27 1.175.652 2.55 1.127 3.805c.475 1.256.996 2.384 1.81 3.15c.406.384.965.707 1.624.68c.463-.018.882-.215 1.243-.506c.176.225.364.323.535.414c.215.114.425.192.642.244a4.61 4.61 0 0 0 1.84.091c.267-.043.548-.127.828-.247c.01.302.022.598.035.898c.038.95.063 1.827.357 2.596c.047.126.176.773.687 1.344c.51.572 1.51.928 2.648.692c.803-.167 1.825-.468 2.503-1.404c.67-.926.973-2.255 1.033-4.409c.015-.116.033-.215.052-.308l.16.014h.018c.857.038 1.787-.08 2.564-.43c.688-.31 1.208-.622 1.587-1.177c.095-.137.199-.303.227-.59c.028-.285-.14-.733-.421-.939c-.563-.414-.916-.257-1.295-.18c-.373.08-.753.124-1.136.133c1.093-1.784 1.876-3.68 2.323-5.358c.264-.99.413-1.903.425-2.701c.012-.798-.055-1.505-.548-2.117c-1.541-1.91-3.708-2.438-5.384-2.456c-.052-.001-.104-.002-.156-.001V1Zm-.044.587c1.585-.015 3.611.417 5.065 2.22c.327.405.424.997.413 1.727c-.012.729-.151 1.601-.405 2.557c-.493 1.852-1.425 4.01-2.738 5.948a.724.724 0 0 0 .15.079c.274.11.898.204 2.145-.044c.313-.065.543-.108.781.068a.478.478 0 0 1 .173.39a.635.635 0 0 1-.123.308c-.24.351-.716.684-1.326.958c-.539.244-1.313.371-1.999.379c-.344.003-.661-.023-.93-.104l-.018-.006c-.104.971-.343 2.89-.498 3.765c-.125.706-.343 1.267-.76 1.687c-.416.42-1.004.673-1.796.838c-.981.204-1.696-.016-2.157-.393c-.46-.375-.671-.874-.798-1.18c-.087-.21-.132-.483-.176-.848a18.073 18.073 0 0 1-.097-1.315a45.725 45.725 0 0 1-.028-2.313c-.41.364-.92.606-1.467.697c-.65.107-1.232.002-1.579-.082a2.19 2.19 0 0 1-.49-.185c-.162-.083-.315-.177-.417-.363a.5.5 0 0 1-.054-.35a.559.559 0 0 1 .206-.303c.188-.148.435-.23.808-.306c.68-.135.917-.228 1.061-.339c.123-.095.262-.287.508-.57a1.166 1.166 0 0 1-.003-.037a2.864 2.864 0 0 1-1.257-.329c-.141.145-.865.888-1.748 1.918c-.371.431-.781.678-1.214.696c-.433.018-.824-.194-1.156-.506c-.665-.626-1.195-1.703-1.657-2.92c-.46-1.218-.836-2.574-1.102-3.729c-.268-1.155-.426-2.086-.448-2.535c-.1-1.909.36-3.195 1.15-4.006c.79-.811 1.872-1.118 2.928-1.177c1.894-.106 3.693.535 4.057.673c.701-.462 1.604-.75 2.733-.732a7.185 7.185 0 0 1 1.588.2l.019-.008c.229-.078.462-.144.698-.196a9.362 9.362 0 0 1 1.957-.23v-.002Zm.143.614h-.137a8.502 8.502 0 0 0-1.61.176a7.048 7.048 0 0 1 2.692 2.062a7.72 7.72 0 0 1 1.07 1.76c.104.242.174.447.213.605c.02.08.034.147.038.217a.392.392 0 0 1-.011.132l-.006.012c.029.803-.176 1.347-.201 2.113c-.019.556.127 1.209.163 1.92c.034.67-.049 1.405-.497 2.127c.038.044.072.088.108.132c1.185-1.81 2.04-3.814 2.495-5.521c.243-.92.373-1.753.384-2.413c.01-.66-.117-1.139-.279-1.338c-1.268-1.573-2.983-1.974-4.422-1.985Zm-4.525.235c-1.117.002-1.919.33-2.526.82c-.627.507-1.047 1.2-1.323 1.911a7.898 7.898 0 0 0-.485 2.213l.013-.007c.337-.184.78-.367 1.254-.473c.475-.106.986-.139 1.449.035c.463.175.846.584.985 1.206c.665 2.986-.207 4.096-.529 4.933a8.628 8.628 0 0 0-.313.929c.041-.01.082-.02.122-.024a1.06 1.06 0 0 1 .51.1c.324.13.546.402.666.714c.031.082.054.17.067.26c.014.038.02.077.019.117a49.059 49.059 0 0 0 .012 3.426c.022.494.054.928.095 1.271c.04.342.098.602.135.69c.12.294.297.678.617.939c.32.26.777.434 1.614.26c.726-.151 1.174-.36 1.474-.663c.298-.301.477-.72.591-1.363c.171-.963.515-3.754.556-4.28c-.018-.395.042-.7.172-.932c.135-.238.343-.384.522-.463c.09-.04.174-.066.243-.085a5.487 5.487 0 0 0-.23-.298a4.065 4.065 0 0 1-.629-1.007a7.578 7.578 0 0 0-.243-.443c-.125-.22-.284-.495-.45-.804c-.333-.619-.695-1.369-.883-2.1c-.187-.729-.215-1.484.265-2.017c.426-.473 1.172-.669 2.293-.559c-.033-.096-.053-.176-.109-.304a7.125 7.125 0 0 0-.983-1.617c-.95-1.178-2.487-2.346-4.863-2.384h-.108v-.001Zm-6.276.047c-.12 0-.24.004-.36.01c-.954.053-1.856.322-2.501.986c-.647.663-1.072 1.751-.98 3.553c.019.34.172 1.296.434 2.43c.262 1.136.634 2.471 1.08 3.65c.446 1.18.988 2.207 1.502 2.693c.259.243.484.341.688.333c.205-.01.451-.124.753-.475a40.03 40.03 0 0 1 1.71-1.877a3.206 3.206 0 0 1-.932-1.307a3.116 3.116 0 0 1-.17-1.58c.097-.678.11-1.312.099-1.812c-.012-.488-.048-.812-.048-1.015v-.028a8.806 8.806 0 0 1 .559-3.095c.264-.682.658-1.375 1.249-1.936c-.58-.185-1.61-.467-2.725-.52a7.4 7.4 0 0 0-.36-.01h.002Zm11.714 4.842c-.641.008-1.001.169-1.19.379c-.268.298-.293.82-.127 1.464c.165.644.507 1.365.829 1.963c.16.3.316.57.442.788c.127.22.22.376.276.51c.052.122.11.23.168.331c.248-.509.293-1.008.267-1.529c-.033-.644-.187-1.303-.164-1.97c.025-.78.184-1.289.198-1.892a5.639 5.639 0 0 0-.699-.044Zm-7.78.105a2.743 2.743 0 0 0-.582.068a4.49 4.49 0 0 0-1.09.412c-.115.06-.226.13-.33.209l-.02.018c.006.134.033.459.045.936c.01.523-.002 1.19-.106 1.91c-.226 1.568.946 2.866 2.324 2.868c.08-.322.213-.648.345-.992c.384-1.003 1.139-1.734.503-4.589c-.104-.467-.31-.656-.594-.763a1.431 1.431 0 0 0-.495-.077Zm7.48.187h.048c.062.002.12.009.17.02a.396.396 0 0 1 .13.051a.153.153 0 0 1 .071.1v.008a.215.215 0 0 1-.034.124a.614.614 0 0 1-.104.137a.646.646 0 0 1-.364.195a.57.57 0 0 1-.388-.095a.569.569 0 0 1-.123-.108a.235.235 0 0 1-.06-.116a.151.151 0 0 1 .04-.118a.361.361 0 0 1 .111-.082a1.256 1.256 0 0 1 .504-.118v.002Zm-7.388.154c.05 0 .103.005.157.012c.144.02.273.057.371.112c.048.025.09.057.126.097a.214.214 0 0 1 .042.073a.195.195 0 0 1 .009.083a.274.274 0 0 1-.071.141a.608.608 0 0 1-.135.12a.619.619 0 0 1-.424.103a.694.694 0 0 1-.396-.209a.652.652 0 0 1-.112-.15a.25.25 0 0 1-.039-.162c.014-.1.099-.15.18-.18a.842.842 0 0 1 .29-.036l.002-.004Zm8.56 6.732h-.003c-.139.05-.253.07-.35.11a.423.423 0 0 0-.225.197c-.06.105-.11.292-.095.61a.49.49 0 0 0 .14.064c.161.048.432.08.735.075c.602-.007 1.344-.143 1.738-.321c.323-.146.623-.336.891-.564c-1.317.264-2.06.194-2.517.011a1.247 1.247 0 0 1-.314-.183Zm-7.588.086h-.02c-.05.004-.123.02-.263.172c-.33.358-.444.582-.716.792c-.27.21-.623.321-1.327.461c-.223.044-.35.093-.436.132c.028.022.025.028.066.049c.103.055.236.103.342.13c.303.073.8.159 1.319.073c.518-.086 1.058-.327 1.518-.953c.08-.108.088-.268.023-.44c-.067-.17-.211-.318-.313-.36a.632.632 0 0 0-.193-.054v-.002Z" />
      </svg>
    ),
  },
  {
    technology: "mongoDB",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22c-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 0 1-.48-.48L12 9l.45 10a3.57 3.57 0 0 1-.45.48z" />
      </svg>
    ),
  },
  {
    technology: "Git",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.848 1.848 0 010 2.6 1.844 1.844 0 01-2.609 0 1.834 1.834 0 010-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 01-.996-2.41L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 002.186 0l10.43-10.43a1.544 1.544 0 000-2.187"></path>
      </svg>
    ),
  },
];

export default technologies;
