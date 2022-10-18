import {Link} from "react-router-dom";

const Steps = [
    {
    title: "Module A : Motherboard",
    text: <p>
        <br/>
       <strong>Necessary Parts:</strong>Motherboard,CPU,CPU Cooler, Thermal Paste, RAM, M.2 (if chosen)
        <br/>
        <br/>
        <strong><h3>Steps:</h3></strong>
        <br/>
        <br/>
        <ol>
            <li>
                <div>
                    Unwrap the Motherboard and the CPU from their store packaging.
                <br/>
                <br/>
                <strong>Caution: </strong>AMD CPUs have pins on the CPU itself, therefore the user should pay attention and
                handle it with care. Intel CPUs do not have pins on the chip itself, but in the socket. If any of these pins
                are bent or damaged, the CPU may not work at all and will have to be replaced.(See Figure 1)
                </div>
                <div className="figure">
                <div className="step_images">
                <img src="https://ourtechroom.com/images/intel_amd_processor_pin330342.jpg?ezimgfmt=ng%3Awebp%2Fngcb4%2Frs%3Adevice%2Frscb4-1" alt=""/>
                </div>
                Figure 1: AMD vs Intel CPU. Adapted from
                </div>
            </li>
            <li>
                <div>
                Lift the retention arm on the motherboard’s CPU socket until it is completely in the vertical position
                (if the socket is Intel, it may need to be pushed out and then lifted)(See Figure 2).
                    <div className={"figure"}>
                        <div className="step_images">
                            <img src="https://www.wikihow.com/images/thumb/d/d7/Install-a-New-Processor-Step-11-Version-3.jpg/aid154463-v4-728px-Install-a-New-Processor-Step-11-Version-3.jpg.webp" alt=""/>
                        </div>
                        Figure 2: Lifting the retention arm. Adapted from
                    </div>
                  <br/>
                <em>For Intel chips only:</em> If the motherboard is completely new out of the box. There may be a plastic
                bracket around the CPU socket, remove it.
                </div>

            </li>
            <li>Flip over the CPU so that the pins are visible. Note the golden triangle in one of the corners.</li>
            <li>
                Align the golden triangle on the CPU with the white or other color triangle corner on the motherboard
                CPU socket.(See Figure 3) Once aligned, place the CPU into the socket.
                <br/>
                <div className="figures">
                    <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/8/8f/Install-a-New-Processor-Step-16.jpg/aid154463-v4-728px-Install-a-New-Processor-Step-16.jpg.webp" alt=""/>

                </div>Figure 3: Aligning the triangle. Adapted from</div>
                </div>
            </li>
            <li>
                Move the retention arm down until locks back into place.
                <strong>Caution:</strong>
                <ul>
                    <li>
                        If there is audible crunching when moving the retention arm downwards, stop immediately.
                        The CPU is most likely placed incorrectly and continuing this motion may damage the pins.
                    </li>
                    <li>
                        The retention arm should not require much force to push down. If unnecessary force is required, stop and reposition the CPU if needed.
                    </li>
                </ul>
            </li>
            <li>
                Unwrap the RAM from its original packaging.
            </li>
            <li>
                Unlock the RAM slots on the motherboard by moving the nib-like lever (usually positioned towards the
                bottom of the slot) downwards. It should click when fully released.
                <br/>

            </li>
            <li>
                Make note of the number of RAM sticks that the motherboard can support.
                <ul>
                    <li>If the motherboard can only support two sticks of RAM or the exact amount of sticks the
                        motherboard can support are on hand, proceed to step 10.
                    </li>
                    <li>
                        If the motherboard can support four or more sticks of RAM, and only two sticks are available,
                        ensure that they are inserted with dual channel support.
                    </li>
                    <li>
                        Insert the first RAM stick into the first slot on the motherboard(See Figure 4), then skip the next slot and
                        place the second stick in following slot. There should be one slot of room in between both sticks.
                        Follow the next instructions to complete the installation of the RAM properly.
                    </li>
                    <div className="figure">
                    <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/f/f0/Install-RAM-Step-11-Version-2.jpg/aid11062-v4-728px-Install-RAM-Step-11-Version-2.jpg.webp" alt=""/>
                    </div>Figure 4 : Inserting RAM. Adapted from </div>

                </ul>
            </li>
            <li>
                Align the indent on the stick with the motherboard’s slot.
            </li>
            <li>
                Push the RAM stick down into the slot until an audible click is heard.
            </li>
            <li>
                Verify that the nib-like lever has locked again. It should automatically in most cases. If it is still
                in the unlocked position, the stick is either not inserted correctly or can be manually locked if everything seems to be alright.
            </li>
            <li>Repeat step 7-12 until all RAM sticks are fully inserted into the motherboard.</li>
            <li>Unwrap the CPU cooler from its original packaging.</li>
            <li>Installing an M.2 Storage Device:(Optional, if an HDD or SSD has been chosen instead)
                <ol type={"a"}>
                    <li>Unscrew the motherboard’s M.2 protector and or heatsink.</li>
                    <li>Remove the singular screw sitting underneath the removed protector.</li>
                    <li>Line up the M.2 with the insert point on the motherboard. Ensure the indent is aligned correctly.</li>
                    <li>Press the M.2 in, it should click. When let go, it should sit diagonally upwards.(See Figure 5)</li>
                    <div className={"figure"}>
                        <div className="step_images">
                            <img src="https://www.wikihow.com/images/thumb/1/1d/Install-an-M.2-SSD-on-a-Desktop-Step-10-Version-2.jpg/aid10807755-v4-728px-Install-an-M.2-SSD-on-a-Desktop-Step-10-Version-2.jpg.webp" alt=""/>
                        </div>
                        Figure 5 : Inserting M.2. Adapted from
                    </div>
                    <li>Screw in the loose side with the same screw that was removed in step 14b.</li>
                    <li>Place the protector back on top of the M.2 storage device.</li>
                </ol>
            </li>
            <li>
                Follow the instruction guide in the cooler box to install the CPU bracket that the cooler needs to attach to.
                <ul>
                    <li>
                        Due to the varying nature of Intel brackets, and AMD chips, there is no concrete way to instruct
                        a user to install one without knowing what exactly it is. Therefore, referring to the box
                        instruction guide is necessary.
                    </li>
                </ul>
            </li>
            <li>
                Unwrap the thermal paste from its packaging

            </li>

            <strong>Caution:</strong>The following steps are timed, and the user must react quickly, or will have to
            restart the timed steps if done incorrectly. There will be a notice when the timed steps are over. It is
            recommended to read the steps in advance.
            <br/>
            <br/>
            <li>


                Place a pea sized blob of thermal paste onto the middle of the CPU.(See Figure 6)
                <div className="figure">
                <div className="step_images">
                    <img src="https://www.wikihow.com/images/thumb/6/6c/Install-a-CPU-Cooler-in-an-AMD-Motherboard-Step-6-Version-2.jpg/aid692874-v4-728px-Install-a-CPU-Cooler-in-an-AMD-Motherboard-Step-6-Version-2.jpg.webp" alt=""/>
                </div>
                Figure 6 : Applying thermal paste. Adapted from
            </div>
                <br/>
                <strong>Caution:</strong>Over-applying thermal paste may result in the computer under performing and messiness
                    that is extremely hard to clean up.
            </li>
            <li>
                Press the base of the CPU cooler (the heatsink) on top of the CPU.(See Figure 7)
                <div className="figure">
                    <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/a/a7/Install-a-CPU-Cooler-in-an-AMD-Motherboard-Step-7-Version-2.jpg/aid692874-v4-728px-Install-a-CPU-Cooler-in-an-AMD-Motherboard-Step-7-Version-2.jpg.webp" alt=""/>
                    </div>
                    Figure 7 : Pressing the heatsink. Adapted from
                </div>
            </li>
            <li>
                Using the bracket in step 16, secure the CPU cooler in place by screwing it in.
            </li>
            <li>
                If the CPU cooler requires some assembly such as attaching fans, etc. Do that now, using the CPU cooler’s instruction guide.
            </li>
            <li>
                Plug the CPU cooler’s power cord into the motherboard’s CPU fan outlet.(See Figure 8)
                <div className="figure">
                    <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/f/f2/Install-a-CPU-Cooler-in-an-AMD-Motherboard-Step-11-Version-2.jpg/aid692874-v4-728px-Install-a-CPU-Cooler-in-an-AMD-Motherboard-Step-11-Version-2.jpg.webp" alt=""/>
                    </div>
                    Figure 8: Plugging the CPU coolers power cord. Adapted from
                </div>
            </li>
            <li>
                The CPU fan cooler has successfully been installed.
                <ul>
                    <li>If the cooler is an AIO, let the radiator remain unattached until case assembly.</li>
                    <li><strong>Caution:</strong>Do not let the radiator hang over any edges, ensure it is on a flat
                        surface. Letting it physically hang may put strain on it and cause damage.
                    </li>
                </ul>
            </li>

        </ol>
        <strong>Module A is now complete.</strong>
        </p>,
    tab:"Module A"
},
{
    title: "Module B : Case & PSU",
    text: <p>
        <strong>Necessary parts:</strong> PC Case, Power Supply (and power cords), Case Fans (all of them), Assembled
        Motherboard (from Module A)
        <br/>
        <br/>
        <h3><strong>Steps:</strong></h3>
        <br/>
        <strong>Note:</strong>There are many cases in existence and lots of them vary in structure. It is not possible
        to cover every single case and is therefore highly recommended to follow Module B along with the provided case
        instructions.
        <br/>
        <br/>
        <ol>
            <li>Follow the case instruction guide and remove the front and back panels of the case.
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/5/5c/Install-a-Power-Supply-Step-4-Version-2.jpg/aid11067-v4-728px-Install-a-Power-Supply-Step-4-Version-2.jpg.webp" alt=""/>
                </div>Figure 9 : Removing the panels. Adapted from </div>
            </li>
            <li>Locate the power supply spot (usually located behind the back panel(See Figure 10).
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/b/ba/Install-a-Power-Supply-Step-8.jpg/aid11067-v4-728px-Install-a-Power-Supply-Step-8.jpg.webp" alt=""/>
                </div>Figure 10 : Locating the power supply spot. Adapted from</div>
            </li>
            <li>Install the power supply by securing it with screws or whatever means are provided by the case.(See Figure 11)
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/6/6f/Install-a-Power-Supply-Step-9.jpg/aid11067-v4-728px-Install-a-Power-Supply-Step-9.jpg.webp" alt=""/>
                </div>Figure 11 : Installing the power supply. Adapted from</div>
                <ul>
                    <li>If the power supply is not fully modular, ensure that the power cables are routed properly
                        through the case for ease of access when plugging them in.
                    </li>
                    <li>
                        If the power supply is fully modular then connect the motherboard cord, one SATA power cord,
                        GPU power cord(s), to the power supply. Route them neatly for ease of access.
                    </li>
                </ul>
            </li>
            <li>Install all case fans in proper positions in the case.(See Figure 12)
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.tech/images/thumb/b/b8/Install-a-Desktop-Computer-Fan-Step-11.jpg/aid1374177-v4-728px-Install-a-Desktop-Computer-Fan-Step-11.jpg.webp" alt=""/>
                </div>Figure 12 : Installing fans. Adapted from</div>
                <br/>
                <strong>Note:</strong>  If an AIO is being used, leave enough space for the radiator to fit later on.
                <ul>
                    <li>Ensure that when the fans are being installed that a proper airflow configuration is followed.
                        There must be a balance between intake and outtake fans.
                    </li>
                    <li>
                        Fans intake air from the front and push air out from the back by standard. If there is no 
                        obvious front to the fans on hand, many manufacturers include an airflow arrow for further 
                        indication.(See Figure 13)
                    </li>
                    <br/>
                    <div className="figure">
                    <div className="step_images">
                    <img src="https://www.wikihow.tech/images/thumb/7/72/Install-a-Desktop-Computer-Fan-Step-15.jpg/aid1374177-v4-728px-Install-a-Desktop-Computer-Fan-Step-15.jpg.webp" alt="" />
                    </div>Figure 13 : Fan airflow. Adapted from</div>
                </ul>
            </li>
            <li>
                Plug all fan power cords into the remaining motherboard fan outlets.
                <ul>
                    <li>If the motherboard cannot support as many fans that are installed, an additional outlet hub may be required. See <a
                        href="https://www.amazon.ca/ThreeBulls-Cooling-Splitter-Adapter-Computer/dp/B07M5P7VHG/ref=sr_1_6?crid=31TP7OBM1GQYZ&keywords=fan+hub&qid=1665627798&qu=eyJxc2MiOiI0LjU0IiwicXNhIjoiNC4zNyIsInFzcCI6IjQuMTYifQ%3D%3D&sprefix=fan+hub%2Caps%2C146&sr=8-6">here</a> for a recommended option.</li>
                </ul>
            </li>
            <li>
                Flip the case so it lays where the back panel once was. The front side should be facing upwards now.
            </li>
            <li>
                Align the motherboard in the case with the standoffs provided.(See Figure 14)
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/6/68/Install-a-Motherboard-Step-5.jpg/aid28234-v4-728px-Install-a-Motherboard-Step-5.jpg.webp" alt="" />
                </div>Figure 14 : Aligning the motherboard. Adapted from</div>
            </li>
            <li>
                Secure the motherboard by screwing it into the case’s standoffs.(See Figure 15)
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/e/e2/Install-a-Motherboard-Step-6.jpg/aid28234-v4-728px-Install-a-Motherboard-Step-6.jpg.webp" alt=""/>
                </div>Figure 15 : Securing the motherboard. Adapted from</div>
                <ul>
                    <li>
                        Motherboards usually come with an IO shield. Before the motherboard is screwed in fully, ensure
                        that the IO shield is placed properly behind the motherboard’s IO, and will be pushed against
                        the case once it is fully secured; making it immovable.(See Figure 16)
                        <br/>
                        <div className="figure">
                        <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/8/81/Install-a-Motherboard-Step-3.jpg/aid28234-v4-728px-Install-a-Motherboard-Step-3.jpg.webp" alt="" />
                        </div>Figure 16 : IO Shield. Adapted from</div>
                    </li>
                    <li>
                        <em>If an AIO is being used instead of a fan CPU cooler:</em>
                        <br/>
                        Attach the radiator to the top or side of the computer case using the provided screws. It is
                        important that the pump’s tubes are flowing upwards to the radiator from the CPU heatsink and
                        not downwards or sideways.
                    </li>
                </ul>
            </li>
            <li>
                Flip the case back into its original position.
            </li>
            <li>
                Connect the PSU’s motherboard cable to the motherboard.
            </li>
            <li>
                Installing HDD or SSD<strong>(Optional, if M.2 has been previously installed)</strong>
                    <ol type="a">
                    <li>Locate the drive bay, and slide the HDD or SSD into place.(See Figure 17)
                        <br/>
                        <div className="figure">
                        <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/e/e0/Install-an-SSD-into-a-Desktop-Computer-Step-4.jpg/aid4813884-v4-728px-Install-an-SSD-into-a-Desktop-Computer-Step-4.jpg.webp" alt=""/>
                        </div>Figure 17 : Sliding the SSD. Adapted from</div>
                    </li>
                    <li>
                        Connect the SATA power cable from the PSU to the storage device.(See Figure 18)
                        <br/>
                        <div className="figure">
                        <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/1/15/Install-an-SSD-into-a-Desktop-Computer-Step-5.jpg/aid4813884-v4-728px-Install-an-SSD-into-a-Desktop-Computer-Step-5.jpg.webp" alt="" />
                        </div>Figure 18 : Connecting the SATA power cable. Adapted from</div>
                    </li>
                    <li>
                        Connect the data cable to the device and the motherboard.(See Figure 19)
                        <br/>
                        <div className="figure">
                        <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/2/22/Install-an-SSD-into-a-Desktop-Computer-Step-6.jpg/aid4813884-v4-728px-Install-an-SSD-into-a-Desktop-Computer-Step-6.jpg.webp" alt="" />
                        </div>Figure 19 : Connecting the data cable. Adapted from</div>
                    </li>
                 
                </ol>
            </li>
            <li>
                Follow the motherboard’s instructions to properly plug in the case’s front panel connectors if necessary.
            </li>
        </ol>
        <strong>Module B is now complete.</strong>
    </p>,
    tab:"Module B"
},
    {
    title: "Module C : GPU Installation",
    text:<p>
        <strong>Necessary parts:</strong>Semi-Assembled PC Case with Motherboard (from Module B), GPU
        <br/>
        <br/>
        <h3><strong>Steps:</strong></h3>
        <br/>
        <ol>
            <li>Unwrap the GPU from its original packaging.</li>
            <li>
                Unscrew the GPU bracket(s) on the case that align with the PCIE x16 slot.
            </li>
            <li>
                Unlock the PCIE x16 slot on the motherboard by pushing back the tab (should look similar to the RAM tabs)(See Figure 20)
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/7/76/Change-a-Graphics-Card-Step-10.jpg/aid197153-v4-728px-Change-a-Graphics-Card-Step-10.jpg.webp" alt=""/>
                </div>Figure 20 : Unlocking the PCIE x16 slot. Adapted from</div>
            </li>
            <li>
                Align the GPU with the PCIE x16 slot, and push down until it clicks or the tab has visibly closed.(See Figure 21)
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/e/e7/Change-a-Graphics-Card-Step-11.jpg/aid197153-v4-728px-Change-a-Graphics-Card-Step-11.jpg.webp" alt="" />
                </div>Figure 21 : Aligning the GPU. Adapted from</div>
            </li>
            <li>
                Align the GPU with the PCIE x16 slot, and push down until it clicks or the tab has visibly closed.
            </li>
            <li>
                Connect the GPU to the power supply using one or more of the previously installed power cables. 
                The power connections for the GPU should be located on the front side.(See Figure 22)
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/6/6c/Change-a-Graphics-Card-Step-12.jpg/aid197153-v4-728px-Change-a-Graphics-Card-Step-12.jpg.webp" alt="" />
                </div>Figure 22 : Connecting the GPU to the power supply. Adapted from</div>
            </li>
            <li>
                Complete the build by closing up the case, reinstalling any removed panels and or any remaining screws.(See Figure 23)
                <br/>
                <div className="figure">
                <div className="step_images">
                <img src="https://www.wikihow.com/images/thumb/6/66/Change-a-Graphics-Card-Step-13.jpg/aid197153-v4-728px-Change-a-Graphics-Card-Step-13.jpg.webp" alt=""/>
                </div>Figure 23 : Closing the case. Adapted from</div>
            </li>

        </ol>
        <strong>Module C is now complete.</strong>
        </p>,
        tab:"Module C"
        },
    {
        title: "Module D",
        text:<p>
                <strong>Necessary parts:</strong> Fully Assembled PC, USB, Keyboard, Mouse, Monitor or TV, HDMI/Video Cables, Power Supply Cord
                <br/>
                <br/>
                <h3><strong>Steps:</strong></h3>
            <br/>
            <br/>
                <ol>
                    <li>Power the computer by plugging it into a wall outlet and turn the power supply on if it’s off (using the power supply cord).</li>
                    <li>Plug a keyboard and mouse into the computer.</li>
                    <li>
                        Set up a monitor or video output device and connect it to the GPU’s IO using a compatible video
                        cable, preferably HDMI.(See Figure 24)
                        <br/>
                        <div className="figure">
                        <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/a/a2/Build-a-Computer-Step-26-Version-3.jpg/aid323368-v4-728px-Build-a-Computer-Step-26-Version-3.jpg.webp" alt=""/>
                        </div>Figure 24 : Connecting a monitor. Adapted from</div>
                    </li>
                    <li>
                        Use <a href="https://www.microsoft.com/en-ca/software-download/windows11">this</a> guide to install
                        a Windows image on the USB key via a separate laptop or functioning computer.
                    </li>
                    <li>
                        Plug the USB key into the computer case and follow these steps to boot Windows.(See Figure 25)
                        <br/>
                        <div className="figure">
                        <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/2/26/Install-Windows-from-a-USB-Flash-Drive-Step-3-Version-4.jpg/aid693359-v4-728px-Install-Windows-from-a-USB-Flash-Drive-Step-3-Version-4.jpg.webp" alt="" />
                        </div>Figure 25 : Plugging the USB. Adapted from</div>
                    </li>
                    <li>
                        Sign in with a valid Windows account after following the boot up instructions in step 5.(See Figure 26)
                        <br/>
                        <div className="figure">
                        <div className="step_images">
                        <img src="https://www.wikihow.com/images/thumb/9/96/Build-a-Computer-Step-28-Version-3.jpg/aid323368-v4-728px-Build-a-Computer-Step-28-Version-3.jpg" alt=""/>
                        </div>Figure 26 : Booting Windows. Adapted from</div>
                    </li>

                </ol>
            <strong>Module D is now complete.</strong>
            <br/>
            <br/>
            <em>Congrats! You successfully built your PC.</em>
            <br/>
            <br/>
            Having issues?
            <Link to={"/troubleshooting"}>
                <button style={{fontSize:"20px"}}>Click Here!</button>
            </Link>
            </p>,
        tab:"Module D"
    }





]

export default Steps;