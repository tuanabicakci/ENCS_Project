const Errors = [
    {
        title: "The PC is not turning on when the power is pushed.",
        text: "It is most likely due to an improper connection. Check to make sure all the RAM sticks are properly " +
            "secured in place. If any are loose, push them in fully. Verify that all power connections are also connected " +
            "fully, ensuring that the clip on the cables has latched on fully.\n" +
            "\n" +
            "If everything seems fine, proceed to check part compatibility and any power constraints.\n" +
            "\n",
    },

    {
        title: "Too much thermal paste was applied to the CPU.",
        text: "Make sure the PC is not powered during this process. Gently wipe any extra paste off components using a paper towel (not wet). It may also be required to clean the CPU entirely, and repaste it.\n" +
            "\n" +
            "Over applying thermal paste may reduce performance.\n",
    },

    {
        title: "Windows is not booting properly or the PC is booting directly into BIOS",
        text: "Check that the primary boot device is set to the preferred storage device in BIOS settings. Ensure that it is the one that Windows was imaged on to. Save settings and reboot the computer.\n" +
            "\n" +
            "If the issue persists, it may be because the storage drive is not powered or plugged in properly. Power off the PC, and check the connection.\n",
    },

    {
        title: "Components do not fit in the case properly or are not providing enough clearance to continue the build",
        text: <p> This is most likely an issue with part compatibility. Use a website such as <a href="https://pcpartpicker.com">PC Part Picker</a> to ensure that
            all of the bought components will work together. If everything seems to be alright, try double checking
                that all of the components are placed or screwed in properly. It is not uncommon to miss standoffs, or misplace parts on a first build.</p>
    },

    {
        title: "Temperatures are extremely high during run time",
        text:"Check to make sure that fans were installed correctly. If a proper airflow configuration is not used, it may significantly increase the temperatures of the computer. \n" +
            "\n" +
            "Other reasoning may be that the particular parts chosen may not allow for much airflow in the first place. If this appears to be the cause, it is recommended to upgrade case sizes or install more fans if there is any room remaining in the case.\n"
    },



]

export default Errors;