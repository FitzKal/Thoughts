package Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import services.ThoughtService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/thoughts")
public class ThoughtController {
    private ThoughtService thoughtService;

    @GetMapping("/puca")
    public String getSignOfLife(){
        return "alive";
    }
}
