import React, { Component } from 'react';  

class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: false };  
      console.log('Component this', this);  
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
      }  
      toggleDisplayBio(){  
          this.setState({displayBio: !this.state.displayBio});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to KLU!</h1>  
                  {  
                      this.state.displayBio ? (   
                          <div>  
                              <p><h4>75th  Independence Day Celeberations</h4>Independence Day is celebrated annually on 15 August as a public holiday in India commemorating the nation's independence from the United Kingdom on 15 August 1947, the day when the provisions of the Indian Independence Act, which transferred legislative sovereignty to the Indian Constituent Assembly, came into effect. India retained King George VI as head of state until its transition to a republic, when the Constitution of India came into effect on 26 January 1950 (celebrated as Indian Republic Day) and replaced the dominion prefix, Dominion of India, with the enactment of the sovereign law Constitution of India. India attained independence following the independence movement noted for largely non-violent resistance and civil disobedience led by Indian National Congress under the leadership of Mahatma Gandhi.

Independence coincided with the partition of India, in which British India was divided into the Dominions of India and Pakistan; the partition was accompanied by violent riots and mass casualties, and the displacement of nearly 15 million people due to religious violence. On 15 August 1947, the first Prime Minister of India, Jawaharlal Nehru raised the Indian national flag above the Lahori Gate of the Red Fort in Delhi. On each subsequent Independence Day, the incumbent Prime Minister customarily raises the flag and gives an address to the nation.[1] The entire event is broadcast by Doordarshan, India's national broadcaster, and usually begins with the shehnai music of Ustad Bismillah Khan. Independence Day is observed throughout India with flag-hoisting ceremonies, parades and cultural events. It is a national holiday.</p>  
                             <p>European traders had established outposts in the Indian subcontinent by the late 17th century. Through overwhelming military strength, the East India Company fought and annexed local kingdoms and established themselves as the dominant force by the 18th century. Following the Indian Rebellion of 1857, the Government of India Act 1858 led the British Crown to assume direct control of India. In the decades following, civic society gradually emerged across India, most notably the Indian National Congress Party, formed in 1885.[5][6]: 123  The period after World War I was marked by colonial reforms such as the Montagu–Chelmsford Reforms, but it also witnessed the enactment of the unpopular Rowlatt Act and calls for self-rule by Indian activists. The discontent of this period crystallised into nationwide non-violent movements of non-cooperation and civil disobedience, led by Mohandas Karamchand Gandhi.[6]: 167 

During the 1930s, the reform was gradually legislated by the British; Congress won victories in the resulting elections.[6]: 195–197  The next decade was beset with political turmoil: Indian participation in World War II, the Congress' final push for non-cooperation, and an upsurge of Muslim nationalism led by the All-India Muslim League. The escalating political tension was capped by Independence in 1947. The jubilation was tempered by the bloody partition of colonial India into India and Pakistan</p>

                              <button onClick={this.toggleDisplayBio}> Show Less</button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.toggleDisplayBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;  