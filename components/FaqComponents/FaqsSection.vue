<template>
  <section id="faqs">
    <div class="row">
        <div class="container">
            <div class="faq-collapsible-wrapper">
                <ul class="collapsible">
                    <li class="active">
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>What types of properties doesReal Estate Xxplorer offer?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    Real Estate Xplorer specializes in a wide range of properties including residential, commercial, and
                                    agricultural land across key locations in Nigeria, such as Lagos, Abuja, Ogun, and Oyo.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>How can I view available properties?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    You can explore our diverse portfolio of properties on our website. For a more in-depth 
                                    view or to schedule a physical visit, please contact us directly through our website or via 
                                    phone.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>Do you offer property management services?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    Yes, we offer comprehensive property management services to ensure your investment is 
                                    well-maintained and yielding optimal returns.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>Can Real Estate Xplorer assist with property development?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    Absolutely. We have a team of experienced developers and consultants who can assist with 
                                    all stages of property development, from conception to completion.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>What makes Real Estate Xplorer different from other real estate companies?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    Our unique approach combines global market insights with local expertise, ensuring 
                                    personalized solutions and a commitment to integrity, efficiency, and value in every 
                                    transaction.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>Are there investment opportunities in the agricultural sector with Real Estate Xplorer?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    Yes, our flagship project, Ìdùnú Òyó Farms and Resort, offers investors the chance to invest 
                                    in farmland, capitalizing on the growth potential of Nigeria's agricultural sector without 
                                    the typical operational challenges.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>How does Real Estate Xplorer ensure customer satisfaction?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    Customer satisfaction is our top priority. We achieve this through our dedicated client 
                                    service, transparent processes, and by offering tailored real estate solutions that meet and 
                                    exceed our clients’ expectations.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>Is there support available for first-time property buyers?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    Yes, we offer comprehensive guidance and support to first-time buyers, helping them 
                                    navigate the buying process smoothly and confidently.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>Can international clients invest in properties through Real Estate Xplorer?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    Certainly. We provide services to both local and international clients, assisting them in 
                                    finding and investing in Nigerian real estate.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header flex-div justify-content-btw">
                            <span>How can I get in touch with a representative for more information?</span>
                            <img src="~/assets/images/arrow-down-2.svg" alt="arrow-down" class="down-arr">
                        </div>
                        <div class="collapsible-body">
                            <div class="faq-txt">
                                <p>
                                    *You can reach us via our website's contact form, email, or phone. Our team is ready to 
                                    provide you with all the information you need and assist you with your
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
              </div>
        </div>
    </div>
  </section>
</template>

<script>
import M from "materialize-css";
export default {
    name: "FaqsSection",
    mounted() {
        const elemsCollapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elemsCollapsible);
    }
}
</script>

<style>

</style>