import React from 'react'

function Accordian() {
  return (
    <div>
        <div data-aos="flip-down" className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is the best time of year to visit Canada?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The best time to visit Canada is from September through November. The weather has cooled down but is still comfortable and changing fall foliage provides a beautiful backdrop for a vacation. Pleasant fall celebrations such as pumpkin, apple, and wine festivals are in full swing.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Do I need a passport or visa to enter the country?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Entry into Canada: Canadian law requires that all persons entering Canada carry proof of citizenship and identity. A valid U.S. passport, passport card, or NEXUS card satisfies these requirements for U.S. citizens. Children under 16 only need proof of U.S. citizenship.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What are some basic facts about Canada?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Canada is one seriously huge place! Measuring 4,600km from north to south, the country spans more than half the Northern Hemisphere. And at a whopping 5,500km from east to west, it stretches across six time zones! A vast, rugged land, Canada is the second largest country in the world (Russia being the largest) but only 0.5% of the world’s population live there.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Where should I go in Canada?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      In the heart of the country is Toronto, Canada's biggest city and the highlight of Canada's arts and cultural scene. Nearby, Niagara Falls is a must-see attraction for visitors to Canada that never disappoints. In the neighboring French-speaking province of Québec, Montreal is known for fashion, culture, and history.      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Accordian